'use client';
import { HiOutlineUsers } from "react-icons/hi2";
import { PiCoinsThin } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'Total Revenue', href: '/dashboard', figures:'220K', icon: PiCoinsThin },
  { name: 'Subscribers', href: '/dashboard',figures:'220', icon: HiOutlineUsers },
  { name: 'Active Tickets', href: '/dashboard',figures:'220', icon: IoTicketOutline },



];

export default function FinancialLinks() {
  const pathname=usePathname();

  return (
    <>
    
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'md:h-40 md:w-70 m-2 flex p-4 text-xl text-slate-400 grow items-center justify-center gap-2 rounded-md bg-white border-2 font-medium hover:bg-sky-100 hover:text-[#00BFA6] md:flex-none md:justify-center md:p-2 md:px-3',
                {
                  'bg-sky-100 text-[#00BFA6]': pathname === link.href,
                },
              )}   
          >
            <LinkIcon className="bg-[#00BFA6] text-[#00BFA6] rounded-full bg-opacity-10 md:my-1 md:mr-2 text-6xl p-1" />
            <div>
            <p className="md:block text-sm">{link.name}</p>
            <p className="text-center text-black">{link.figures}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
