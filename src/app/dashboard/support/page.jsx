import SupportBar from '@/app/ui/SupportBar';
import TableQuery from '@/app/ui/TableQuery';

export default function Support() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-medium mb-4">Support & Queries</h1>
      <h2 className="py-2 text-xl text-slate-600 mb-6">Overview</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <SupportBar />
        </div>

        <div className="flex-1">
          <TableQuery />
        </div>
      </div>
    </div>
  );
}
