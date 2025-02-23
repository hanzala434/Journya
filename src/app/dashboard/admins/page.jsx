'use client'

import AdminDialog from "@/app/ui/AdminDialog";
import Search from "@/app/ui/Search";
import TableAdmin from "@/app/ui/TableAdmin";
import { Suspense, useState } from "react";

export default function Admins(){
        const [isDialogOpen, setIsDialogOpen] = useState(true);
        const [searchQuery, setSearchQuery] = useState(''); // Search input state

    return(
        <>
        <div>
            <h1 className="text-3xl">Admins</h1>

            <div className="flex justify-between my-2">
                <h2 className="text-xl text-slate-500">Total Users : 440</h2>
                <div className="mb-4 flex gap-2">

            <Search placeholder="Search users..." onSearch={setSearchQuery} />
            {isDialogOpen && <AdminDialog onClose={() => setIsDialogOpen(false)} />}
            </div>
            </div>
            
            <div>
            <Suspense fallback={<div>Loading admins...</div>}>
                <TableAdmin searchQuery={searchQuery}/>
            </Suspense>
                
            </div>
        </div>
        </>
    )
}