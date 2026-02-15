import {
  MdChildCare,
  MdVerifiedUser,
  MdLock,
  MdEventBusy,
  MdPayments,
  MdCreditCard,
  MdAccountBalanceWallet,
  MdChevronRight,
} from "react-icons/md";

export default function OrderSummary() {
  return (
    <aside className="sticky top-24 space-y-6">
      {/* Order Summary Card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 p-6 dark:border-slate-800">
          <h3 className="text-lg font-bold">Order Summary</h3>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2b9dee]/10 text-[#2b9dee]">
              <MdChildCare />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Service Selected
              </p>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                Child Care (Hourly)
              </p>
            </div>
          </div>

          <div className="space-y-3 py-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                Base Rate ($15/hr x 4)
              </span>
              <span className="font-semibold">$60.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                Service Fee (5%)
              </span>
              <span className="font-semibold">$3.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                VAT (Optional)
              </span>
              <span className="font-semibold">$0.00</span>
            </div>
          </div>

          <div className="border-t border-dashed border-slate-200 pt-4 dark:border-slate-700">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold">Total Cost</span>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#2b9dee]">
                  $63.00
                </span>
                <p className="text-[10px] font-medium text-slate-400">
                  All taxes included
                </p>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b9dee] py-4 text-lg font-bold text-white shadow-lg shadow-[#2b9dee]/30 transition-all hover:bg-blue-600">
              Confirm Booking
              <MdChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Trust Accent Section */}
        <div className="border-t border-[#34a853]/20 bg-[#e6f4ea] p-4 dark:bg-[#34a853]/10">
          <div className="flex gap-3">
            <MdVerifiedUser className="mt-1 text-sm text-[#34a853]" />
            <div>
              <p className="text-xs font-bold text-[#34a853]">
                Guaranteed Safe Service
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                Our caregivers are background checked and verified.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Trust & Info */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MdLock className="text-base" />
          <span>Secure encrypted checkout</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MdEventBusy className="text-base" />
          <span>Free cancellation up to 24h before</span>
        </div>
        <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
            We Accept
          </p>
          <div className="flex justify-center gap-4 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100">
            <MdPayments className="text-2xl" />
            <MdCreditCard className="text-2xl" />
            <MdAccountBalanceWallet className="text-2xl" />
          </div>
        </div>
      </div>
    </aside>
  );
}
