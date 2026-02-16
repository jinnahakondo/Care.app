import { MdChildCare, MdElderly, MdSick } from "react-icons/md";

const services = [
  { icon: MdChildCare, label: "Child Care", value: "child" },
  { icon: MdElderly, label: "Elderly Care", value: "elderly" },
  { icon: MdSick, label: "Sick Care", value: "sick" },
];

export default function ServiceSelection({ setBookingInfo }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold">
        <span className="material-icons text-[#2b9dee]">medical_services</span>
        Service Type & Duration
      </h2>

      <div className="mb-8 grid grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <label
              key={service.value}
              className="group relative cursor-pointer"
            >
              <input
                onChange={() => setBookingInfo(service.value)}
                type="radio"
                name="service"
                value={service.value}
                defaultChecked={service.value === "child"}
                className="peer sr-only"
              />
              <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-slate-100 p-4 transition-all peer-checked:border-[#2b9dee] peer-checked:bg-[#2b9dee]/5 dark:border-slate-800">
                <Icon className="text-3xl text-slate-400 transition-colors group-hover:text-[#2b9dee]" />
                <span className="text-sm font-semibold">{service.label}</span>
              </div>
            </label>
          );
        })}
      </div>

      <div className="space-y-4">
        <label className="mb-2 block text-sm font-semibold">
          Service Duration Mode
        </label>
        <div className="flex w-fit rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            className="rounded-md bg-white px-6 py-2 text-sm font-bold text-[#2b9dee] shadow-sm dark:bg-slate-700"
          >
            Hourly
          </button>
          <button
            type="button"
            className="rounded-md px-6 py-2 text-sm font-semibold text-slate-500"
          >
            Daily
          </button>
        </div>
      </div>
    </section>
  );
}
