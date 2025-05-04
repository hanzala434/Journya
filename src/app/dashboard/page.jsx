// 'use client'
import TotalBar from '@/app/ui/TotalBar'
// import dynamic from 'next/dynamic'

// const BarChart = dynamic(() => import('../ui/BarChart'), { ssr: false });
// const DashboardGraph = dynamic(() => import('../ui/DashboardGraph'), { ssr: false });
// const RadialChart = dynamic(() => import('../ui/RadialChart'), { ssr: false });

import { useSession, signIn, signOut } from "next-auth/react"
export default function Page() {
    
    return(
        <>

        <div className='md:flex gap-1 min-h-[500px]'>
            <div className='flex flex-col mt-10 md:flex md:w-80 h-full '>
                <TotalBar/>
            </div>
            {/* <div className='md:py-10 h-full w-full '>
                <DashboardGraph/>
            </div>
        </div>
        <div className='md:flex-row flex flex-col'>
           <BarChart/> 
           <RadialChart/> */}
        </div>
        </>

)
  }