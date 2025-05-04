// app/users/page.tsx
import { fetchUsers } from '@/app/lib/api';
import UsersClient from '@/app/ui/UsersClient'; // Client component

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1 className="text-3xl">Users</h1>
      <UsersClient users={users} />
    </div>
  );
}
