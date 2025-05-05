import journya from '@/app/assets/journya.png'
import Image from 'next/image'
import RegisterForm from '../ui/RegisterForm'

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-10">
      <div className="flex justify-center items-center py-10 md:py-60 w-full md:w-1/2">
        <Image
          width={657}
          height={258}
          src={journya}
          alt="journya-logo"
          className="w-3/4 md:w-auto"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-20 border-2 shadow-lg rounded mb-10 md:mb-0">
        <RegisterForm />
      </div>
    </div>
  );
}
