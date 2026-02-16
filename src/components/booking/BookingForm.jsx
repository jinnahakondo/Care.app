import { MdArrowBack } from "react-icons/md";
import LocationForm from "./LocationForm";
import ServiceSelection from "./ServiceSelection";

export default function BookingForm({ setBookingInfo }) {
  return (
    <div className="space-y-6 lg:col-span-2">
      <ServiceSelection setBookingInfo={setBookingInfo} />
      <LocationForm />

      <div className="flex items-center justify-between py-4">
        {/* <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
          <MdArrowBack className="text-sm" />
          Back
        </button>
        <button className="rounded-lg bg-[#2b9dee] px-10 py-3 font-bold text-white shadow-lg shadow-[#2b9dee]/25 transition-all hover:bg-blue-600">
          Next Step
        </button> */}
      </div>
    </div>
  );
}
