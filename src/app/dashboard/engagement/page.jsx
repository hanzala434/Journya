import EngagementBar from '@/app/ui/EngagementBar'
import DashbaardGraph from '@/app/ui/DashboardGraph'
export default function Engagement(){
    return(
        <>
        <div className='w-full'>
            <h1 className='text-3xl font-medium'>Engagement Metrics</h1>
            <h2 className='py-2 text-xl text-slate-600' >Overview</h2>
            <div className='flex '>
                <EngagementBar/>
            </div>

            <div>
                <h1 className='py-2 text-xl text-slate-600'>Graphical Representation</h1>
                <DashbaardGraph/>
            </div>
        </div>
        </>
    )
}