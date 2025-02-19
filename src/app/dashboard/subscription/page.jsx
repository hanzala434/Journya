"use client"
import ExportButton from "@/app/ui/ExportButton";
import FilterButton from "@/app/ui/FilterButton";
import TableSubscription from "@/app/ui/TableSubscription";
import { useState } from "react";

export default function Subscription(){
        const [isDialogOpen, setIsDialogOpen] = useState(true);
    
    return(
        <>
        <div>
            <h1 className="text-3xl">Subscription</h1>

            <div className="flex justify-between my-2">
                <h2 className="text-xl text-slate-500">Subscribers : 440</h2>

            <div className="flex gap-2">

            <FilterButton/>
            <ExportButton/>
            </div>

            </div>
            
            <div>
                <TableSubscription/>
            </div>
        </div>
        </>
    )
}