import { MdChevronLeft, MdChevronRight, MdSupportAgent } from "react-icons/md";

export default function CalendarWidget() {
  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-6 dark:border-slate-800">
          <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
            Upcoming Schedule
          </h2>
          {/* Calendar Mini Header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              October 2023
            </span>
            <div className="flex gap-2">
              <button className="rounded p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <MdChevronLeft className="text-lg" />
              </button>
              <button className="rounded p-1 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <MdChevronRight className="text-lg" />
              </button>
            </div>
          </div>
          {/* Calendar Grid */}
          <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {/* Row 1 */}
            <div className="p-2 text-xs text-slate-300">25</div>
            <div className="p-2 text-xs text-slate-300">26</div>
            <div className="p-2 text-xs text-slate-300">27</div>
            <div className="p-2 text-xs text-slate-300">28</div>
            <div className="p-2 text-xs text-slate-300">29</div>
            <div className="p-2 text-xs text-slate-300">30</div>
            <div className="p-2 text-xs font-medium dark:text-white">1</div>
            {/* Row 2 */}
            <div className="p-2 text-xs font-medium dark:text-white">2</div>
            <div className="p-2 text-xs font-medium dark:text-white">3</div>
            <div className="relative p-2 text-xs font-medium dark:text-white">
              4
              <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#308ce8]" />
            </div>
            <div className="p-2 text-xs font-medium dark:text-white">5</div>
            <div className="rounded-lg bg-[#308ce8] p-2 text-xs font-medium text-white shadow-sm">
              6
            </div>
            <div className="p-2 text-xs font-medium dark:text-white">7</div>
            <div className="p-2 text-xs font-medium dark:text-white">8</div>
            {/* Row 3 */}
            <div className="relative p-2 text-xs font-medium dark:text-white">
              9
              <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#308ce8]" />
            </div>
            <div className="p-2 text-xs font-medium dark:text-white">10</div>
            <div className="p-2 text-xs font-medium dark:text-white">11</div>
            <div className="p-2 text-xs font-medium dark:text-white">12</div>
            <div className="relative p-2 text-xs font-medium dark:text-white">
              13
              <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#308ce8]" />
            </div>
            <div className="p-2 text-xs font-medium dark:text-white">14</div>
            <div className="p-2 text-xs font-medium dark:text-white">15</div>
          </div>
        </div>
        {/* Next Visit Preview */}
        <div className="bg-[#308ce8]/5 p-6 dark:bg-[#308ce8]/10">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#308ce8]">
            Today&apos;s Appointment
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Elderly Assistance
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                09:00 AM - 05:00 PM
              </p>
            </div>
            <div className="flex -space-x-2">
              <img
                alt="Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYLQQQK-v-U5hCj3ru2c7X8nsMinlVL1WL1WI_9PhPCU__L-JN7lfQcMXlzhdDRw-nFsPTHvPBLCQut8iQ7QxFcdGGD5rFTQemRl7V5DsIx2UKdGJaPpD_U28vl3DAiaIckUkuC91skYhV2XACWPY-wTvguLY39sxWZjpr35k3lfvBAVjbeeEEkIchlKeoX7tUgf6Ju7fHH3p-FnV166PcWlwhdlqQMMHqQJKXtSXarqqBbshQK0vj2Q-muMzCADRCzswLwA7hV_A"
                className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-slate-800"
              />
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg border border-[#308ce8] py-2 text-sm font-semibold text-[#308ce8] transition-colors hover:bg-[#308ce8] hover:text-white">
            View Details
          </button>
        </div>
      </div>

      {/* Quick Support Card */}
      <div className="relative flex items-center justify-between overflow-hidden rounded-xl bg-slate-900 p-6 text-white">
        <div className="z-10">
          <p className="text-sm font-medium opacity-80">Need help?</p>
          <h4 className="text-lg font-bold">Talk to Care Advisor</h4>
          <button className="mt-3 rounded-lg bg-white px-4 py-1.5 text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100">
            Contact Now
          </button>
        </div>
        <MdSupportAgent className="absolute -bottom-4 -right-4 text-6xl opacity-10" />
      </div>
    </div>
  );
}
