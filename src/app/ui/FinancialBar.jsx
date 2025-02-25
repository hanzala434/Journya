'use client';
import { PiCoinsThin } from "react-icons/pi";
import { CiCreditCardOff } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'Monthly Subscription', href: '/dashboard', figures:'220', icon: PiCoinsThin },
  { name: 'Yearly Subscription', href: '/dashboard',figures:'220', icon: PiCoinsThin },
  { name: 'Free Trials', href: '/dashboard',figures:'220', icon: CiCreditCardOff },



];

export default function FinacialBar() {
  const pathname=usePathname();

  return (
    <>
    
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className=
                'md:h-[123px] md:w-60 m-2 flex p-4 text-xl text-slate-400 grow items-center justify-center gap-2 rounded-md bg-white border-2 font-medium hover:bg-sky-100 hover:text-[#00BFA6] md:flex-none md:justify-center md:p-2 md:px-3'   
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
