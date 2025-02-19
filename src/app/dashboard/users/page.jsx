"use client"
import Search from "@/app/ui/Search";
import TableUsers from "@/app/ui/TableUsers";
import UserDialog from "@/app/ui/UserDialog";
import { useState } from "react";

export default function Users(){
    const [isDialogOpen, setIsDialogOpen] = useState(true);
 

    return(
        <>
        <div>
            <h1 className="text-3xl">Users</h1>

            <div className="flex justify-between my-2">
                <h2 className="text-xl text-slate-500">Total Users : 440</h2>
              
                {/* <div className="mb-4">
                <Search placeholder="Search users..." onSearch={setSearchQuery} />
            </div> */}
            {isDialogOpen && <UserDialog onClose={() => setIsDialogOpen(false)} />}
            
            </div>
            
            <div>
                <TableUsers/>
            </div>
        </div>
        </>
    )
}