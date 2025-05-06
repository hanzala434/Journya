import { fetchUsers } from '@/app/lib/api';
import EngagementBar from '@/app/ui/EngagementBar';
import DashboardGraph from '@/app/ui/DashboardGraph';

export default async function Engagement() {
    const users = await fetchUsers();

    return (
        <div className="w-full px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl font-medium">Engagement Metrics</h1>
            <h2 className="py-2 text-xl text-slate-600">Overview</h2>

            <div className="flex flex-col lg:flex-row gap-4">
                <EngagementBar users={users} />
            </div>

            <div className="mt-6">
                <h1 className="py-2 text-xl text-slate-600">Graphical Representation</h1>
                <div className="w-full ">
                    <DashboardGraph />
                </div>
            </div>
        </div>
    );
}
