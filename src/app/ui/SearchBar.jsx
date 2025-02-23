// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function SearchBar() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [query, setQuery] = useState(searchParams.get("q") || "");

//   useEffect(() => {
//     setQuery(searchParams.get("q") || ""); // Update state when URL changes
//   }, [searchParams]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (query) params.set("q", query);
//     router.push(`?${params.toString()}`); // Update URL
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex gap-2">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search users..."
//         className="border p-2"
//       />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//         Search
//       </button>
//     </form>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function SearchBar({getSearchResults}) {
 const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/users/search?query=${searchQuery}`);
    const users = await res.json();
    return users;
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-shrink-0 overflow-visible">
      <label htmlFor="search" className="sr-only">Search Users</label>
      <input
        type="text"
        id="search"
        className="peer block w-full rounded-md border border-gray-300 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
}
