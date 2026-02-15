import React from 'react';
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import { MdAddCircleOutline } from "react-icons/md";
import StatsCards from "@/components/dashboard/StatsCards";

const UserDashboard = () => {
    return (
        <div>
             <main className="ml-64 flex-1 p-8">
        {/* Header/Welcome Banner */}
        <header className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Good morning, Sarah
              </h1>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Here&apos;s what&apos;s happening with your care services today.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-[#308ce8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-[#308ce8]/25 transition-all hover:bg-[#308ce8]/90">
              <MdAddCircleOutline className="text-xl" />
              Book a Caregiver
            </button>
          </div>
          {/* Stats/Summary Cards */}
          <StatsCards />
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
          {/* Calendar Widget */}
          <div className="lg:col-span-1">
            <CalendarWidget />
          </div>
        </div>
      </main>
        </div>
    );
};

export default UserDashboard;