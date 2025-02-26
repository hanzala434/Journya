import { fetchCompliances } from '../lib/complianceApi';
import ComplianceStatus from './ComplianceStatus';

export default async function TableCompliance() {
   const compliance =await fetchCompliances()


  return (
    <div className="mt-6">

      {/* Users Table */}
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left rounded bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-3 py-3">EMAIL</th>
                  <th className="px-3 py-3">ACTIVITY</th>
                  <th className="px-3 py-3">DEVICE</th>
                  <th className="px-3 py-3">LOCATION</th>
                  <th className="px-3 py-3">DATE</th>
                  <th className="px-3 py-3">STATUS</th>

                </tr>
              </thead>
              <tbody>
                {compliance.length > 0 ? (
                  compliance.map(compliance => (
                    <tr key={compliance._id} className="border-b text-sm">
                      <td className="px-3 py-3">{compliance.email}</td>
                      <td className="px-3 py-3">{compliance.activity}</td>
                      <td className="px-3 py-3">{compliance.device}</td>
                      <td className="px-3 py-3">{compliance.location}</td>
                      <td className="px-3 py-3">{compliance.date}</td>

                      <td className="px-3 py-3">
                        <ComplianceStatus status={compliance.status}/>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No compliance found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
