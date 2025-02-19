"use client"
import AdminDialog from "@/app/ui/AdminDialog";
import TableAdmin from "@/app/ui/TableAdmin";
import { useState } from "react";

export default function Admins(){
        const [isDialogOpen, setIsDialogOpen] = useState(true);
    
    return(
        <>
        <div>
            <h1 className="text-3xl">Admins</h1>

            <div className="flex justify-between my-2">
                <h2 className="text-xl text-slate-500">Total Users : 440</h2>

            {isDialogOpen && <AdminDialog onClose={() => setIsDialogOpen(false)} />}

            </div>
            
            <div>
                <TableAdmin/>
            </div>
        </div>
        </>
    )
}