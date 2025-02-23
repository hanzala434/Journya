import TableTransaction from '@/app/ui/TableTransaction'
import TotalBar from '@/app/ui/TotalBar'

export default function Page(){
    return(
        <>
         <div className='w-full'>
                    <h1 className='text-3xl font-medium'>Financial Overview</h1>
                    <div className='flex '>
                        <TotalBar/>
                    </div>
            <div>
                <div>

                   {/* <FilterButton/>
                   <ExportButton/> */}
                </div>
                <div>
                    <TableTransaction/>
                </div>
            </div>

        </div>
        </>
    )
}