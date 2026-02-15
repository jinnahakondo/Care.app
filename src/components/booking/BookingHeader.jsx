import { MdFavorite, MdSupportAgent } from "react-icons/md";
import Link from "next/link";

export default function BookingHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2b9dee] text-white">
            <MdFavorite className="text-xl" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Care<span className="text-[#2b9dee]">.xyz</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="text-slate-600 transition-colors hover:text-[#2b9dee] dark:text-slate-400"
          >
            How it works
          </Link>
          <Link
            href="#"
            className="text-slate-600 transition-colors hover:text-[#2b9dee] dark:text-slate-400"
          >
            Find Caregivers
          </Link>
          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700">
            <img
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWBQNNrRTcQqAHKtCZI1pKzYsroWFB7KfknZl8hV28KDjCcMoCEpC8HGFrpnjCFI5kxerLLjW7MTSQ64bAAvkRAoVS6lVK6jZyzcM0rKVeFGBFqfHH1nC5sigKoYrVqPY2NFXZStrUzbsP5DDj5x0c-Fr_jXEVhBmCW_HuHN2vNZcVb1PRzTVYXz_0BDmV1CRNX_9HNaVeVeuPVhuiWbSqp4X3h9H4Gn9rGN6lSiamj5BHw7zjfiN31WHBO4KG2LAbiLOefvKlWO4"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
