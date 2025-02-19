'use client';

import { useEffect, useState } from 'react';
import Search from './Search';
import UserStatus from './UserStatus';
import OptionsMenu from './OptionsMenu';
import { fetchUsers } from '@/app/lib/api';

export default function TableUsers() {
  const [users, setUsers] = useState([]); // Store users from API
  const [searchQuery, setSearchQuery] = useState(''); // Search input state

  // Fetch users from API when component mounts
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    loadUsers();
  }, []);

  // Filter users based on search query (name or email)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <div className="mb-4 ">
        <Search onSearch={setSearchQuery} />
      </div>

      {/* Users Table */}
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
                      <td className="px-3 py-3">{user.signup}</td>
                      <td className="px-3 py-3">{user.lastlogin}</td>
                      <td className="px-3 py-3">
                        <UserStatus status={user.status} />
                      </td>
                      <td className="px-3 py-3 text-right">
                        <OptionsMenu />
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
