import SupportBar from '@/app/ui/SupportBar'
import TableQuery from '@/app/ui/TableQuery'

export default function Support(){
    return(
        <>
        <div>
            <h1 className='text-3xl font-medium'>Support & Queries</h1>
            <h2  className='py-2 text-xl text-slate-600'>Overview</h2>
            <div>
                <div className="flex">
                    <SupportBar/>
                </div>
                <div>
                    <TableQuery/>
                </div>
            </div>
        </div>
        </>
    )
}