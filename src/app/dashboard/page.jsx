import TotalBar from '@/app/ui/TotalBar'
import DashboardGraph from '../ui/DashboardGraph';
import graph2 from '@/public/graph2.png'
import BarChart from '../ui/BarChart';
import RadialChart from '../ui/RadialChart';
export default function Page() {
    return(
        <>

        <div className='md:flex gap-1 '>
            <div className='flex flex-col md:flex md:w-80 '>
                <TotalBar/>
            </div>
            <div className='md:py-10  '>
                <DashboardGraph/>
            </div>
        </div>
        <div className='md:flex-row flex flex-col'>
           <BarChart/> 
           <RadialChart/>
        </div>
        </>
    );
  }