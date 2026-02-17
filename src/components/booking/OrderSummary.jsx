import { MdChildCare, MdChevronRight } from "react-icons/md";

export default function OrderSummary({ bookingInfo, service }) {
  return (
    <aside className="sticky top-24 space-y-6">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h3 className="text-lg font-bold">Order Summary</h3>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2b9dee]/10 text-[#2b9dee]">
              <MdChildCare />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Service Selected
              </p>
              <p className="font-bold text-slate-800">
                {bookingInfo.serviceType} ({bookingInfo.durationType})
              </p>
            </div>
          </div>

          <div className="border-t border-dashed border-slate-200 pt-4">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold">Total Cost</span>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#2b9dee]">
                  ${service?.pricePerHour}
                </span>
                <p className="text-[10px] font-medium text-slate-400">
                  All taxes included
                </p>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b9dee] py-4 text-lg font-bold text-white shadow-lg shadow-[#2b9dee]/30 hover:bg-blue-600">
              Confirm Booking
              <MdChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
