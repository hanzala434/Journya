import { fetchAdmins } from '@/app/lib/adminApi';
import AdminsClient from '@/app/ui/AdminsClient'; 

export default async function AdminsPage() {
  const admins = await fetchAdmins();

  return (
    <div>
      <h1 className="text-3xl">Admins</h1>
      <AdminsClient admins={admins} />
    </div>
  );
}
