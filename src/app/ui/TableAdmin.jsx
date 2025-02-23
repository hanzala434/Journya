'use client';

import { useEffect, useState } from 'react';
import Search from './Search';
import OptionsMenu from './OptionsMenu';
import { fetchAdmins } from '../lib/adminApi';

export default function TableAdmins({searchQuery}) {
      // const admins=await fetchAdmins();
    
  const [admins, setAdmins] = useState([]); // Store users from API
  // const [searchQuery, setSearchQuery] = useState(''); // Search input state

  //Fetch users from API when component mounts
  useEffect(() => {
    async function loadAdmins() {
      try {
        const data = await fetchAdmins();
        setAdmins(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    loadAdmins();
  }, []);

  //Filter users based on search query (name or email)
  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
 

      {/* Users Table */}
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg  p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-4 py-3">NAME</th>
                  <th className="px-3 py-3">EMAIL</th>
                  <th className="px-3 py-3">PHONE NO.</th>
                  <th className="px-3 py-3">SIGNUP</th>
                  <th className="px-3 py-3">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.length > 0 ? (
                  filteredAdmins.map(admin => (
                    <tr key={admin.id} className="border-b text-sm">
                      <td className="py-3 pl-6">{admin.name}</td>
                      <td className="px-3 py-3">{admin.email}</td>
                      <td className="px-3 py-3">{admin.phone}</td>
                      <td className="px-3 py-3">{admin.signup}</td>
                    
                      <td>
                        <OptionsMenu />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No admins found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
