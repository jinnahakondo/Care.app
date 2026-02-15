import { MdChildCare, MdElderly, MdMedicalServices } from "react-icons/md";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    id: "child",
    label: "child_care",
    title: "Child Care",
    description:
      "Expert nannies and babysitters for your little ones, ensuring safety and early development support.",
    icon: MdChildCare,
    colorBg: "from-sky-100 to-sky-200",
  },
  {
    id: "elderly",
    label: "elderly",
    title: "Elderly Care",
    description:
      "Compassionate companionship and daily living assistance to help seniors maintain independence at home.",
    icon: MdElderly,
    colorBg: "from-emerald-100 to-emerald-200",
  },
  {
    id: "sick",
    label: "medical_services",
    title: "Sick Care",
    description:
      "Professional post-op care and chronic illness support from medical assistants and RNs.",
    icon: MdMedicalServices,
    colorBg: "from-fuchsia-100 to-fuchsia-200",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center md:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
            Our Services
          </h2>
          <h3 className="mt-2 text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
            Dedicated Care For Every Need
          </h3>
          <p className="mt-3 text-balance text-sm text-slate-600 sm:text-base">
            We provide specialized attention and professional support tailored to your
            unique circumstances.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg md:p-6"
              >
                {/* Icon pill */}
                <div className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-10% to-90% p-[2px]">
                  <div
                    className={`flex items-center gap-2 rounded-2xl bg-linear-to-r ${service.colorBg} px-4 py-2`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sky-600">
                      <Icon className="text-lg" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-sky-700">
                      {service.label}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={
                    service.id === "elderly"
                      ? "/services/elderly-care"
                      : "/#services"
                  }
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
                >
                  <span>Learn More</span>
                  <FaArrowRightLong className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

