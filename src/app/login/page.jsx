import journya from '@/app/assets/journya.png'
import LoginForm from '../ui/LoginForm'
import Image from 'next/image'
export default function Login(){
    return(
        <>
        <div className='flex mx-10'>
            <div className='flex justify-center py-60 w-1/2 '>
                <Image
                width={657}
                height={258}
                src={journya}
                alt="journya-logo"
                />
            </div>
            <div className='m-auto w-1/2 p-20 border-2 shadow-lg rounded'>
                <LoginForm/>
            </div>
        </div>
        </>
    )
}