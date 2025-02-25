import FinacialBar from '@/app/ui/FinancialBar'
import TableTransaction from '@/app/ui/TableTransaction'
import TotalBar from '@/app/ui/TotalBar'

export default function Page(){
    return(
        <>
         <div className='w-full'>
                    <h1 className='text-3xl font-medium'>Financial Overview</h1>
                    <div className='flex '>
                        <FinacialBar/>
                    </div>
            <div>
                <div>

                   {/* <FilterButton/>
                   <ExportButton/> */}
                </div>
                <div className='mt-4'>
                <h1 className='text-2xl font-medium'>Transactions</h1>
                    <TableTransaction/>
                </div>
            </div>

        </div>
        </>
    )
}