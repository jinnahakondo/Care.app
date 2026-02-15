import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

export default function BookingFooter() {
  return (
    <div className="mt-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2b9dee]/10">
              <MdSupportAgent className="text-[#2b9dee]" />
            </div>
            <div>
              <h4 className="font-bold">Need help booking?</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Our support team is available 24/7
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-bold transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              Chat With Us
            </button>
            <button className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-bold transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              Call 16xxx
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between border-t border-slate-100 pt-8 text-xs font-medium text-slate-400 dark:border-slate-800 md:flex-row">
          <p>© 2024 Care.xyz Inc. All rights reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="#" className="transition-colors hover:text-[#2b9dee]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-[#2b9dee]">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-[#2b9dee]">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
