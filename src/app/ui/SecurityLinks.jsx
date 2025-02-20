'use client';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'Compliance', href: '/dashboard', icon: AiOutlineSafetyCertificate },

];

export default function SecurityLinks() {
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
              )}           >
            <LinkIcon className="md:my-1 md:mr-2 w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
