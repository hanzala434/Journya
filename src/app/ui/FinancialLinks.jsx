'use client';
import { IoStatsChartOutline } from "react-icons/io5";
import { TbDeviceDesktopCheck } from "react-icons/tb";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { name: 'Finacial Overview', href: '/dashboard/financial', icon: IoStatsChartOutline },
  { name: 'Operational Metrics', href: '/dashboard/operational', icon: TbDeviceDesktopCheck },
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
                'm-2 flex p-4 text-base md:text-xl text-slate-400 h-[48px] grow items-center justify-start gap-2 rounded-md hover:bg-[#00BFA6] hover:bg-opacity-20 hover:text-[#00BFA6] md:flex-none md:p-2 md:px-3',
                {
                  'bg-primaryLight text-primary shadow-md border-l-2 border-l-primary': pathname === link.href, 
                },
              )}           >
            <LinkIcon className="md:my-1 md:mr-2 w-6" />
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
