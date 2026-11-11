import { Outlet } from "react-router";
import { DashboardHeader } from "./DashboardHeader";
import { Sidebar } from "./Sidebar";
export const DashboardLayout = () => (
  <div className="flex h-screen w-full bg-white dark:bg-gray-950 overflow-hidden">
    <Sidebar />
    <div className="flex-1 flex flex-col pl-64 h-full overflow-hidden">
      <DashboardHeader />
      <main className="flex-1 overflow-auto p-6 lg:p-10 scroll-smooth bg-white dark:bg-gray-950">
        <Outlet />
      </main>
    </div>
  </div>
);
