'use client';

import { useState, useMemo } from 'react';
import Search from '@/app/ui/Search';
import { fetchAdmins } from '../lib/adminApi';
import TableAdmin from './TableAdmin';
import AdminDialog from './AdminDialog';

export default function adminsClient({ admins: initialAdmins }) {
  const [admins, setAdmins] = useState(initialAdmins);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredAdmins = useMemo(() => {
    return admins.filter((admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, admins]);

  const refreshAdmins = async () => {
    const updatedadmins = await fetchAdmins(); 
    setAdmins(updatedadmins);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-gray-600">
          Total Admins: {filteredAdmins.length}
        </h2>
        <div className="flex gap-2">
          <Search
            placeholder="Search admins..."
            onSearch={setSearchQuery}
          />
        
        </div>
        <AdminDialog
          onClose={() => setIsDialogOpen(false)}
          refreshAdmins={refreshAdmins}
        />
      </div>

      

      <div className="mt-4">
        <TableAdmin admins={filteredAdmins}  refreshAdmins={refreshAdmins}/>
      </div>
    </>
  );
}
