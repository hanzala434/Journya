"use client"

import { TbLockPassword } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";


export default function OptionsMenu(){
    const [open, setOpen] = useState(false);

    return(
        <>
  <div className=" overflow-visible">
      <button onClick={() => setOpen(!open)} className="p-2">
        <BsThreeDotsVertical className="h-5 w-5 text-gray-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          <button className="flex items-center px-4 py-2 text-sm text-[#00BFA6] hover:bg-gray-100 w-full text-left">
            <TbLockPassword className="h-5 w-5 mr-2" /> Reset Password
          </button>
          <button className="flex items-center px-4 py-2 text-sm text-[#00BFA6] hover:bg-gray-100 w-full text-left">
            <CiCircleCheck className="h-5 w-5 mr-2" /> Activate
          </button>
          <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
            <MdOutlineCancel className="h-5 w-5 mr-2" /> Deactivate
          </button>
          <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
            <FaRegTrashAlt  className="h-5 w-5 mr-2" /> Delete Account
          </button>
        </div>
      )}
    </div>
        </>
    )
}