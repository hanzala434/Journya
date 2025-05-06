import SupportBar from '@/app/ui/SupportBar';
import TableQuery from '@/app/ui/TableQuery';

export default function Support() {
  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-3xl font-medium mb-2">Support & Queries</h1>
      <h2 className="text-xl text-slate-600 mb-6">Overview</h2>

      <div className="w-full mb-8">
        <SupportBar />
      </div>

      <div className="w-full overflow-x-auto">
        <TableQuery />
      </div>
    </div>
  );
}
