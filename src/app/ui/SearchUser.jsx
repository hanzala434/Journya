"use client";

import { useState, useEffect } from "react";

export default function SearchUser() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (query.trim() === "") {
                setUsers([]); // Clear results if query is empty
                return;
            }

            try {
                const res = await fetch(`/api/users?query=${query}`);
                if (!res.ok) throw new Error("Failed to fetch users");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        // Debounce the API call to avoid excessive requests
        const timeoutId = setTimeout(fetchUsers, 500);
        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div className="max-w-md mx-auto p-4">
            <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <ul className="mt-4 border border-gray-200 rounded">
                {users.map((user) => (
                    <li key={user.id} className="p-2 border-b last:border-none">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
