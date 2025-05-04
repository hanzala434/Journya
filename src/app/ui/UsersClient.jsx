'use client';

import { useState, useMemo } from 'react';
import Search from '@/app/ui/Search';
import UserDialog from '@/app/ui/UserDialog';
import TableUsers from '@/app/ui/TableUsers';
import { fetchUsers } from '../lib/api';

export default function UsersClient({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers);

  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]);

  const refreshUsers = async () => {
    const updatedUsers = await fetchUsers(); 
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-gray-600">
          Total Users: {filteredUsers.length}
        </h2>
        <div className="flex gap-2">
          <Search
            placeholder="Search users..."
            onSearch={setSearchQuery}
          />
        
        </div>
        <UserDialog
          onClose={() => setIsDialogOpen(false)}
          refreshUsers={refreshUsers}
        />
      </div>

      

      <div className="mt-4">
        <TableUsers users={filteredUsers}  refreshUsers={refreshUsers}/>
      </div>
    </>
  );
}
