"use client"
import { useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import { CiExport } from "react-icons/ci";


export default function ExportButton(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="relative ">

      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center font-medium rounded-full p-4 w-40 bg-[#00BFA6] text-white "
      >
         <CiExport className="text-2xl mr-2  "/>
        Export      </button>

    
    </div>
        </>
    )
}