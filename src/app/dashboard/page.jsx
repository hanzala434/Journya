import TotalBar from '@/app/ui/TotalBar'
import DashboardGraph from '@/app/ui/DashboardGraph'
import BarChart from '@/app/ui/BarChart'
import RadialChart from '@/app/ui/RadialChart'


import { useSession, signIn, signOut } from "next-auth/react"
export default function Page() {
    
    return(
        <>

        <div className='md:flex gap-1 min-h-[500px]'>
            <div className='flex flex-col mt-10 md:flex md:w-80 h-full '>
                <TotalBar/>
            </div>
            <div className='md:py-10 h-full w-full '>
                <DashboardGraph/>
            </div>
        </div>
        <div className='md:flex-row flex flex-col'>
           <BarChart/> 
           <RadialChart/>
        </div>
        </>

)
  }