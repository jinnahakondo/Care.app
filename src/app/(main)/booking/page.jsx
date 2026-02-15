import { MdArrowBack } from "react-icons/md";
import BookingHeader from "@/components/booking/BookingHeader";
import BookingStepper from "@/components/booking/BookingStepper";
import ServiceSelection from "@/components/booking/ServiceSelection";
import LocationForm from "@/components/booking/LocationForm";
import OrderSummary from "@/components/booking/OrderSummary";
import BookingFooter from "@/components/booking/BookingFooter";

export const metadata = {
  title: "Booking Form - Care.xyz",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-800 dark:bg-[#101a22] dark:text-slate-100">
      <BookingHeader />

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Stepper Component */}
        <BookingStepper currentStep={2} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side: Form */}
          <div className="space-y-6 lg:col-span-2">
            <ServiceSelection />
            <LocationForm />

            <div className="flex items-center justify-between py-4">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                <MdArrowBack className="text-sm" />
                Back
              </button>
              <button className="rounded-lg bg-[#2b9dee] px-10 py-3 font-bold text-white shadow-lg shadow-[#2b9dee]/25 transition-all hover:bg-blue-600">
                Next Step
              </button>
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>

      <BookingFooter />
    </div>
  );
}
