import dynamic from 'next/dynamic';
import UserStatus from './UserStatus';

const OptionsMenu = dynamic(() => import('./OptionsMenu'), { ssr: false });

export default function TableUsers({ users , refreshUsers }) {
  return (
    <div className="rounded-lg  shadow border border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-[#00BFA6] bg-opacity-20 text-sm font-semibold text-gray-800">
          <tr>
            <th className="px-6 py-3 text-left">NAME</th>
            <th className="px-4 py-3 text-left">EMAIL</th>
            <th className="px-4 py-3 text-left">SIGNUP DATE</th>
            <th className="px-4 py-3 text-left">LAST LOGIN</th>
            <th className="px-4 py-3 text-left">STATUS</th>
            <th className="px-4 py-3 text-left">OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="border-b text-sm">
                <td className="py-3 pl-6">{user.name}</td>
                <td className="px-3 py-3">{user.email}</td>
                <td className="px-3 py-3">{user.signup}</td>
                <td className="px-3 py-3">{user.lastlogin}</td>
                <td className="px-3 py-3">
                  <UserStatus status={user.status} />
                </td>
                <td className="px-3 py-3">
                  <OptionsMenu user={user} refreshUsers={refreshUsers} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
