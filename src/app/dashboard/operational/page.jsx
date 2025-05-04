import OperationalBar from "@/app/ui/OperationalBar";
import DashboardGraph from "@/app/ui/DashboardGraph"
export default function Page(){
    return(
    <>
         <div className='w-full'>
                   <h1 className='text-4xl font-medium'>Operational Metrics</h1>
                   <h2 className='pt-8 text-3xl text-black font-medium' >Overview</h2>
                   <div className='flex '>
                       <OperationalBar/>
                   </div>
       
                   <div className="mt-6">
                       <h1 className='py-2 text-2xl text-black font-medium'>Graphical Representation</h1>
                       <DashboardGraph/>
                   </div>
               </div>
    </>
    )
}