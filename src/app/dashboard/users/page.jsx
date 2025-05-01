'use client'
import Search from "@/app/ui/Search";
import TableUsers from "@/app/ui/TableUsers";
import UserDialog from "@/app/ui/UserDialog";
import { Suspense } from "react";
import { useState } from "react";

export default function Users(){
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [refreshTable, setRefreshTable] = useState(false);
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
  
    // const [isDialogOpen, setIsDialogOpen] = useState(true);
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //       const res = await fetch('/api/users');
    //       const data = await res.json();
    //       setUsers(data);
    //       setLoading(false);
    //     };
    
        // const users=await fetchUsers();
    //   }, []);
    
    //   if (loading) {
    //     return <LoadingPage />;
    //   }
    return(
        <>
        <div>
            <h1 className="text-3xl">Users</h1>

            <div className="flex justify-between my-2">
                <h2 className="text-xl text-slate-500">Total Users : 440</h2>
                <div className="mb-4 flex gap-2">
                {/* <SearchBar getSearchResults={users}/> */}

                <Search placeholder="Search users..." onSearch={setSearchQuery} />
            {isDialogOpen && ( <UserDialog onClose={
                () => setIsDialogOpen(false)} 
                 onUserAdded={() => setRefreshTable(prev => !prev)} />)}
            </div>
            
            </div>
            
            <div>
                <Suspense fallback={<div>Loading users...</div>}>
                <TableUsers searchQuery={searchQuery} refresh={refreshTable}/>
                </Suspense>
            </div>
        </div>
        </>
    )
}