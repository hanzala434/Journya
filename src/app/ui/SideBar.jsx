"use client"

import { useState, useEffect, useRef } from 'react'
import journya from '@/app/assets/journya.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogOutOutline } from "react-icons/io5"
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import NavLinks from './NavLinks'
import FinancialLinks from './FinancialLinks'
import SecurityLinks from './SecurityLinks'
import { signOut } from "next-auth/react"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scrolling when sidebar is open on mobile
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Handle logout with redirection to login page
  const handleLogout = (e) => {
    e.preventDefault()
    signOut({ callbackUrl: "/login" })
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          aria-hidden="true"
        />
      )}
      
      {/* Topbar for Mobile */}
      <div className="md:hidden flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
        <Image
          src={journya}
          width={150}
          height={40}
          alt="journya-logo"
          className="object-contain"
        />
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:shadow-none md:border-r md:h-screen
        `}
      >
        {/* Close Button for Mobile */}
        <div className="flex items-center justify-between md:hidden p-4 border-b">
          <h1 className="text-xl font-semibold text-[#00BFA6]">Menu</h1>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <IoMdClose className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-[calc(100%-60px)] md:h-full overflow-y-auto scrollbar-hide">
          <div className="px-4 py-4 flex-grow">
            <Link href="/dashboard" className="mb-6 hidden md:block">
              <Image
                src={journya}
                width={180}
                height={48}
                className="object-contain"
                alt="journya-logo"
                priority
              />
            </Link>

            {/* Overview */}
            <div className="mb-6">
              <h1 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-3">Overview</h1>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 py-2 px-3 text-[#00BFA6] bg-[#00BFA6] bg-opacity-10 rounded-md border-l-2 border-l-[#00BFA6] font-medium transition-colors"
              >
                <HiOutlineSquares2X2 className="w-5 h-5" />
                <span className="text-base">Dashboard</span>
              </Link>
            </div>

            {/* User Management */}
            <div className="mb-6 border-t pt-6">
              <h1 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-3">User Management</h1>
              <div className="flex flex-col">
                <NavLinks />
              </div>
            </div>

            {/* Financial Status */}
            <div className="mb-6 border-t pt-6">
              <h1 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-3">Financial Status</h1>
              <div className="flex flex-col">
                <FinancialLinks />
              </div>
            </div>

            {/* Security */}
            <div className="mb-6 border-t pt-6">
              <h1 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-3">Security</h1>
              <div className="flex flex-col">
                <SecurityLinks />
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-auto px-4 py-4 border-t">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 py-3 px-4 rounded-md bg-gray-50 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <IoLogOutOutline className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}