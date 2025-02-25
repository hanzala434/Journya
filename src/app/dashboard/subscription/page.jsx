"use client"
import Search from "@/app/ui/Search";
import ExportButton from "@/app/ui/ExportButton";
import FilterButton from "@/app/ui/FilterButton";
import TableSubscription from "@/app/ui/TableSubscription";
import { Suspense } from "react";
import { useState } from "react";

export default function Subscription(){
     const [isDialogOpen, setIsDialogOpen] = useState(true);
     const [searchQuery, setSearchQuery] = useState(''); // Search input state

    
    return(
        <>
        <div>
            <h1 className="text-3xl">Subscription</h1>

            <div className="flex justify-between my-2">
                <h2 className="md:text-xl px-2 md:mt-2 text-slate-500">Subscribers : 440</h2>

            <div className="flex gap-2">
            <Search placeholder="Search users..." onSearch={setSearchQuery} />
            <FilterButton/>
            <ExportButton/>
            </div>

            </div>
            
            <div>
            <Suspense fallback={<div>Loading subscriptions...</div>}>
                <TableSubscription searchQuery={searchQuery}/>
            </Suspense>    
            </div>
        </div>
        </>
    )
}