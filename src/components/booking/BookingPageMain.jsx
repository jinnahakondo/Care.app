"use client";
import OrderSummary from "./OrderSummary";
import BookingForm from "./BookingForm";
import { useState } from "react";

export default function BookingPageMain({ service }) {
  const [bookingInfo, setBookingInfo] = useState({
    userId: "",
    serviceId: "",
    serviceType:'child',
    durationType: "hour",
    durationValue: "",
    location: {
      division: "",
      district: "",
      city: "",
      area: "",
      address: "",
    },
    totalCost: "",
    status: "Pending",
    bookingDate:'',

  });
  console.log("booking info:", bookingInfo);
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-800 dark:bg-[#101a22] dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side: Form */}
          <BookingForm setBookingInfo={setBookingInfo} />
          {/* Right Side: Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary service={service} />
          </div>
        </div>
      </main>

      {/* <BookingFooter /> */}
    </div>
  );
}
