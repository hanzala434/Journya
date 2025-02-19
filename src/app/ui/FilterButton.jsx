"use client"
import { useState } from "react";
import { SlEqualizer } from "react-icons/sl";


export default function FilterButton(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="relative ">

      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center font-medium rounded-full p-4 w-40 bg-[#00BFA6] text-white "
      >
         <SlEqualizer className="text-xl mr-2 font-medium "/>
        Filter      </button>

    
    </div>
        </>
    )
}