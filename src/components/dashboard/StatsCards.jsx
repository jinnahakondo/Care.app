import {
  MdAssignment,
  MdAccountBalanceWallet,
  MdSchedule,
} from "react-icons/md";

const stats = [
  {
    icon: MdAssignment,
    badge: "+2 this month",
    badgeColor: "bg-[#10b981]/10 text-[#10b981]",
    label: "Active Bookings",
    value: "4 Bookings",
  },
  {
    icon: MdAccountBalanceWallet,
    badge: "Past 30 days",
    badgeColor: "text-slate-400",
    label: "Total Spent",
    value: "$1,240.50",
  },
  {
    icon: MdSchedule,
    badge: "Next: 2h 15m",
    badgeColor: "bg-[#308ce8]/10 text-[#308ce8]",
    label: "Upcoming Visits",
    value: "8 Scheduled",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#308ce8]/10">
                <Icon className="text-[#308ce8]" />
              </div>
              <span
                className={`rounded px-2 py-1 text-xs font-medium ${stat.badgeColor}`}
              >
                {stat.badge}
              </span>
            </div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </h3>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
