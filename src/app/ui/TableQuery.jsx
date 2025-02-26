import { fetchQuerys } from '../lib/supportApi';
import QueryStatus from './QueryStatus';

export default async function TableQuery() {
    const query =await fetchQuerys()

  return (
    <div className="mt-6">
   
      <div className="flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead className="text-left rounded bg-opacity-20 text-sm font-semibold bg-[#00BFA6]">
                <tr>
                  <th className="px-3 py-3">TICKET ID</th>
                  <th className="px-3 py-3">ISSUE</th>
                  <th className="px-3 py-3">SUBJECT</th>
                  <th className="px-3 py-3">DATE</th>
                  <th className="px-3 py-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {query.length > 0 ? (
                  query.map(query => (
                    <tr key={query._id} className="border-b text-sm">
                      <td className="px-3 py-3">{query.ticket_id}</td>
                      <td className="px-3 py-3">{query.issue}</td>
                      <td className="px-3 py-3">{query.subject}</td>
                      <td className="px-3 py-3">{query.date}</td>
                      <td className="px-3 py-3">
                        <QueryStatus status={query.status} />
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-gray-500">
                      No query found.
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
