'use client';
import { HiOutlineUsers } from "react-icons/hi2";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { PiUserCirclePlus } from "react-icons/pi";
import { TbMessageQuestion } from "react-icons/tb";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    // { name: 'Dashboard', href: '/dashboard', icon: HiOutlineSquares2X2 },
  { name: 'Users', href: '/dashboard', icon: HiOutlineUsers },
  {
    name: 'Admins',
    href: '/dashboard',
    icon: HiOutlineUsers,
  },
  { name: 'Subscriptions', href: '/dashboard', icon: LuLaptopMinimalCheck },
  { name: 'Engagement Metrics', href: '/dashboard', icon: PiUserCirclePlus  },
  { name: 'Support & Queries', href: '/dashboard', icon: TbMessageQuestion  },



];

export default function NavLinks() {
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
                ' flex p-4 text-xl bg-white text-slate-400 h-[48px] grow items-center justify-center gap-2 rounded-md font-medium hover:bg-sky-100 hover:text-[#00BFA6] md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-[#00BFA6]': pathname === link.href,
                },
              )}             >
            <LinkIcon className="md:my-1 md:mr-2 w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
