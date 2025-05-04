'use client';

import { useState, useMemo } from 'react';
import Search from '@/app/ui/Search';
import { fetchAdmins } from '../lib/adminApi';
import TableAdmin from './TableAdmin';
import AdminDialog from './AdminDialog';

export default function AdminsClient({ admins: initialAdmins }) {
  const [admins, setAdmins] = useState(initialAdmins);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAdmins = useMemo(() => {
    return admins.filter((admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, admins]);

  const refreshAdmins = async () => {
    const updatedAdmins = await fetchAdmins();
    setAdmins(updatedAdmins);
  };

  return (
    <div className="w-full px-2 md:px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700">
          Total Admins: {filteredAdmins.length}
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Search
            placeholder="Search admins..."
            onSearch={setSearchQuery}
          />

          <AdminDialog
            refreshAdmins={refreshAdmins}
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <TableAdmin admins={filteredAdmins} refreshAdmins={refreshAdmins} />
      </div>
    </div>
  );
}
