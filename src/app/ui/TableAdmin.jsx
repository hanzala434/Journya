'use client';

import dynamic from 'next/dynamic';

const OptionsAdmin = dynamic(() => import('./OptionsAdmin'), { ssr: false });

export default function TableAdmins({ admins, refreshAdmins }) {
  return (
    <div className="rounded-lg shadow border border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-[#00BFA6] bg-opacity-20 text-sm font-semibold text-gray-800">
          <tr>
            <th className="px-6 py-3 text-left">NAME</th>
            <th className="px-4 py-3 text-left">EMAIL</th>
            <th className="px-4 py-3 text-left">PHONE NO.</th>
            <th className="px-4 py-3 text-left">SIGNUP DATE</th>
            <th className="px-4 py-3 text-left">OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((admin) => (
              <tr key={admin._id} className="border-b text-sm">
                <td className="py-3 pl-6">{admin.name}</td>
                <td className="px-3 py-3">{admin.email}</td>
                <td className="px-3 py-3">{admin.phone}</td>
                <td className="px-3 py-3">{admin.signup}</td>
                <td className="px-3 py-3">
                  <OptionsAdmin admin={admin} refreshAdmins={refreshAdmins} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No admins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
