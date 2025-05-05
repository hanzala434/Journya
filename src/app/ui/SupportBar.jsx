'use client';
import { HiOutlineUsers } from "react-icons/hi2";
import { PiCoinsThin } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Total Tickets', href: '/dashboard', figures: '220', icon: IoTicketOutline },
  { name: 'Received Ticket', href: '/dashboard', figures: '220', icon: IoTicketOutline },
  { name: 'Pending Tickets', href: '/dashboard', figures: '220', icon: IoTicketOutline },
];

export default function SupportBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex flex-1 items-center gap-4 rounded-md border-2 bg-white p-4 text-xl font-medium text-slate-400 hover:bg-sky-100 hover:text-[#00BFA6] md:max-w-[240px]',
              {
                'bg-sky-100 text-[#00BFA6]': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="text-6xl text-[#00BFA6] bg-[#00BFA6]/10 rounded-full p-1" />
            <div>
              <p className="text-sm">{link.name}</p>
              <p className="text-black text-lg font-semibold">{link.figures}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
