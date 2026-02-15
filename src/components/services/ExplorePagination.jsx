import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ExplorePagination() {
  return (
    <nav className="mt-12 flex justify-center">
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:bg-[#2b8cee] hover:text-white"
        >
          <MdChevronLeft className="text-sm" />
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b8cee] text-sm font-bold text-white"
        >
          1
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 transition-all hover:bg-slate-50"
        >
          2
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 transition-all hover:bg-slate-50"
        >
          3
        </button>

        <span className="px-2 text-xs text-slate-400">...</span>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 transition-all hover:bg-slate-50"
        >
          12
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:bg-[#2b8cee] hover:text-white"
        >
          <MdChevronRight className="text-sm" />
        </button>
      </div>
    </nav>
  );
}

