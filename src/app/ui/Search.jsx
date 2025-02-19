'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Send search query to parent
  };

  return (
    <div className=" flex flex-1 flex-shrink-0 overflow-visible ">
      <label htmlFor="search" className="sr-only">
        Search Users
      </label>
      <input
        type="text"
        id="search"
        className="peer block w-full rounded-md border border-gray-300 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {/* <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    </div>
  );
}
