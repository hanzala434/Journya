import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import journya from '@/app/assets/journya.png'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      {/* Logo */}
      <div className="mb-8">
        <Image
        src={journya}
        widht={300}
        height={200}
        className='md:w-[552px]'
        alt="journya-logo"/>
      </div>

      {/* Sign In/Up Options */}
      <div className="flex items-center gap-4">
        <Link
          href="/api/auth/signin"
          className="px-6 py-3 bg-[#00BFA6] hover:bg-white hover:text-[#00BFA6] text-white font-semibold rounded-md shadow-md transition"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="px-6 py-3 bg-[#00BFA6] border-[#00BFA6] text-white hover:bg-white hover:text-[#00BFA6] font-semibold rounded-md shadow-md transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
