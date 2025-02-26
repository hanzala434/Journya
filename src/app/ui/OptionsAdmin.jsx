"use client";

import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteAdmin } from "../lib/adminApi";

export default function OptionsAdmin({ admin, refreshAdmin }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteAdmin(admin._id);
    setLoading(false);
    refreshAdmin();
  };

 

//   const handlePasswordReset = async () => {
//     setLoading(true);
//     await resetUserPassword(user._id, "newpassword123"); // ⚠️ Replace with real password logic
//     setLoading(false);
//   };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2">
        <BsThreeDotsVertical className="h-5 w-5 text-gray-600" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          {/* <button
            onClick={handlePasswordReset}
            disabled={loading}
            className="flex items-center px-4 py-2 text-sm text-[#00BFA6] hover:bg-gray-100 w-full text-left"
          >
            <TbLockPassword className="h-5 w-5 mr-2" /> Reset Password
          </button> */}

         

          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
          >
            <FaRegTrashAlt className="h-5 w-5 mr-2" /> Delete Account
          </button>
        </div>
      )}
    </div>
  );
}
