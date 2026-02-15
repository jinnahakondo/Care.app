import { MdSearch, MdLocationOn } from "react-icons/md";

export default function ExploreSearchBar() {
  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8 md:flex-row">
        {/* Search input */}
        <div className="relative grow">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <MdSearch className="text-lg" />
          </span>
          <input
            type="text"
            placeholder="Search by caregiver name or specialty..."
            className="w-full rounded-xl border-none bg-[#f6f7f8] px-4 py-3.5 pl-12 text-sm text-slate-900 outline-none ring-0 transition-all focus:ring-2 focus:ring-[#2b8cee]"
          />
        </div>

        {/* Location input */}
        <div className="relative w-full md:w-64">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <MdLocationOn className="text-lg" />
          </span>
          <input
            type="text"
            placeholder="New York, NY"
            className="w-full rounded-xl border-none bg-[#f6f7f8] px-4 py-3.5 pl-12 text-sm text-slate-900 outline-none ring-0 transition-all focus:ring-2 focus:ring-[#2b8cee]"
          />
        </div>

        {/* Submit button */}
        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#2b8cee] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-opacity-90">
          <MdSearch className="text-sm" />
          <span>Find Services</span>
        </button>
      </div>
    </section>
  );
}

