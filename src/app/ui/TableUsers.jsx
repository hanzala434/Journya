'use client';

import { useEffect, useState } from 'react';
import UserStatus from './UserStatus';
import OptionsMenu from './OptionsMenu';
import { fetchUsers } from '@/app/lib/api';

export default function TableUsers({searchQuery,refresh }) {


   const [users, setUsers] = useState([]); 

   const refreshUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
    useEffect(() => {
      refreshUsers();
    }, [refresh ]);
  
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  

  return (
    <div className="mt-6">


      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-4 py-3">NAME</th>
                  <th className="px-3 py-3">EMAIL</th>
                  <th className="px-3 py-3">SIGNUP DATE</th>
                  <th className="px-3 py-3">LAST LOGIN</th>
                  <th className="px-3 py-3">STATUS</th>
                  <th className="px-3 py-3">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map(user => (
                    <tr key={user.id} className="border-b text-sm">
                      <td className="py-3 pl-6">{user.name}</td>
                      <td className="px-3 py-3">{user.email}</td>
                      <td className="px-3 py-3">{user.duration}</td>
                      <td className="px-3 py-3">{user.lastlogin}</td>
                      <td className="px-3 py-3">
                        <UserStatus status={user.status} />
                      </td>
                      <td className="px-3 py-3 text-left">
                        <OptionsMenu user={user} refreshUsers={refreshUsers} />     
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No users found.
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
