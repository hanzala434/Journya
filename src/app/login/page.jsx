import journya from '@/app/assets/journya.png';
import LoginForm from '../ui/LoginForm';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-10 py-16">
      {/* Logo */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <Image
          width={657}
          height={258}
          src={journya}
          alt="journya-logo"
          className="object-contain"
        />
      </div>

      {/* Login Form */}
      <div className="m-auto w-full md:w-1/2 p-8 md:p-20 border-2 shadow-lg rounded">
        <LoginForm />
      </div>
    </div>
  );
}
