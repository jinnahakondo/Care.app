import { useState } from "react";
import { MdChildCare, MdElderly, MdSick } from "react-icons/md";

const services = [
  { icon: MdChildCare, label: "Child Care", value: "child" },
  { icon: MdElderly, label: "Elderly Care", value: "elderly" },
  { icon: MdSick, label: "Sick Care", value: "sick" },
];

export default function ServiceSelection({ bookingInfo, setBookingInfo }) {
  const [activeType, setActiveType] = useState(bookingInfo.durationType);

  const handleDuration = (type) => {
    setActiveType(type);
    setBookingInfo({ ...bookingInfo, durationType: type });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-lg font-bold flex items-center gap-2">
        <span className="material-icons text-[#2b9dee]">medical_services</span>
        Service Type & Duration
      </h2>

      {/* Service Type */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <label key={service.value} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={service.value}
                checked={bookingInfo.serviceType === service.value}
                onChange={() =>
                  setBookingInfo({ ...bookingInfo, serviceType: service.value })
                }
                className="sr-only"
              />
              <div className={`flex flex-col items-center gap-2 rounded-lg border p-4 ${
                bookingInfo.serviceType === service.value ? "border-[#2b9dee] bg-[#2b9dee]/5" : "border-slate-100"
              }`}>
                <Icon className="text-3xl text-slate-400" />
                <span className="text-sm font-semibold">{service.label}</span>
              </div>
            </label>
          );
        })}
      </div>

      {/* Duration Buttons */}
      <div className="flex w-fit rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => handleDuration("hour")}
          className={`px-6 py-2 rounded-md font-bold text-sm ${
            activeType === "hour" ? "bg-white shadow-sm text-[#2b9dee]" : "text-slate-500"
          }`}
        >
          Hourly
        </button>
        <button
          type="button"
          onClick={() => handleDuration("day")}
          className={`px-6 py-2 rounded-md font-bold text-sm ${
            activeType === "day" ? "bg-white shadow-sm text-[#2b9dee]" : "text-slate-500"
          }`}
        >
          Daily
        </button>
      </div>
    </section>
  );
}
