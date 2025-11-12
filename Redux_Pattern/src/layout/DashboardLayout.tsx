import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Outlet } from 'react-router';


const DashboardLayout = () => {
    return (
        <div className="h-screen p-5 flex text-white">
            <aside className="w-[250px] p-5 border-2 border-slate-400 rounded-xl h-full">
                <DashboardSidebar />
            </aside>

            <div className="flex flex-col flex-1 space-y-5 pl-5">
                <header className="h-20 p-5 border-2 border-slate-400 rounded-xl">
                    <DashboardHeader />
                </header>

                <main
                    className="flex-1 p-5 border-2 border-slate-400 rounded-xl overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
};

export default DashboardLayout;