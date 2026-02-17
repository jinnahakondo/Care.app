"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";
import OrderSummary from "./OrderSummary";


export default function BookingMain({ service }) {
  const [bookingInfo, setBookingInfo] = useState({
    serviceType: "child",
    durationType: "hour",
    bookingDate: "",
    location: {
      division: "",
      district: "",
      city: "",
      area: "",
      address: "",
    },
  });

  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-800 dark:bg-[#101a22] dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side: Form */}
          <BookingForm bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />
          {/* Right Side: Order Summary */}
          <OrderSummary bookingInfo={bookingInfo} service={service} />
        </div>
      </main>
    </div>
  );
}
