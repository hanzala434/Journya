"use client"

import journya from '@/app/assets/journya.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import NavLinks from './NavLinks';
import FinancialLinks from './FinancialLinks';
import SecurityLinks from './SecurityLinks';
import { signOut } from "next-auth/react"

export default function SideBar(){
    return(
        <>
         <div className="flex md:h-screen flex-col px-3 py-4 md:px-6 border-2 md:overflow-y-auto scrollbar-hide">
      <Link
        href="/dashboard"
      >
        <Image
        src={journya}
        widht={300}
        height={200}
        className='md:w-[552px]'
        alt="journya-logo"/>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className=' md:block hidden'>
        <h1 className='text-slate-400 font-medium text-xl mb-2 '>Overview</h1>
        <Link
            href='/dashboard'
            className='m-2 flex p-4 text-xl bg-opacity-20 bg-[#00BFA6] text-[#00BFA6] h-[48px] grow items-center justify-center gap-2 rounded-md font-mediumy md:flex-none md:justify-start md:p-2 md:px-3'
            >
            <HiOutlineSquares2X2 className="md:my-1 md:mr-2 w-6" />
            <p className="hidden md:block">Dashboard</p>
        </Link>
        </div>
        <div className='flex flex-col'>

        <div className='md:my-1 py-4 md:border-t-2'>
        <h1 className='text-slate-400 font-medium text-xl mb-2 '>User Management</h1>
        <div className='flex md:flex-col'>
        <NavLinks />
        </div>
        </div>

        <div className='md:my-1 py-4 md:border-t-2'>
        <h1 className='text-slate-400 font-medium text-xl mb-2 '>Financial Status</h1>
        <div className='flex md:flex-col'>
        <FinancialLinks />
        </div>
        </div>

        <div className='md:my-1 py-4 md:border-t-2'>
        <h1 className='text-slate-400 font-medium text-xl mb-2 '>Security</h1>
        <div className='flex md:flex-col'>
        <SecurityLinks />
        </div>
        </div>
        </div>

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button 
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex h-[48px] w-full grow items-center justify-start gap-1 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <IoLogOutOutline className="w-20 h-5" />
            <div className="hidden md:block">Log Out</div>
          </button>
        </form>
      </div>
    </div>
        </>
    )
}