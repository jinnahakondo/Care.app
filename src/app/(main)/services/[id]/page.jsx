import {
  MdVerifiedUser,
  MdVolunteerActivism,
  MdHealthAndSafety,
  MdCheck,
  MdSecurity,
  MdCalendarToday,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { getSingleService } from "@/lib/api/services";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  const service =await getSingleService(id);
 
  if (!service) {
    return <p>Service not found.</p>;
  }

  const { serviceName, _id, description, pricePerHour, pricePerDay, image } =
    service;

  return (
    <main className="bg-slate-50 pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-xs font-medium text-slate-500 md:mb-8"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-slate-400">/</span>
              <Link href="/services" className="hover:text-slate-700">
                Services
              </Link>
            </li>
            <li className="flex items-center gap-1 text-slate-900">
              <span className="text-slate-400">/</span>
              <span>{serviceName}</span>
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
          {/* Left column */}
          <div className="space-y-6">
            {/* Hero image card */}
            <section className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-100">
              <div className="relative h-64 w-full bg-slate-900 sm:h-72">
                <Image
                  src={image}
                  alt={serviceName}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* About this service */}
            <section className="space-y-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-lg font-semibold text-slate-900">
                {serviceName}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <article className="flex gap-3 rounded-lg bg-slate-50 p-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <MdVolunteerActivism />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Emotional Support
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Meaningful companionship and mental stimulation.
                    </p>
                  </div>
                </article>

                <article className="flex gap-3 rounded-lg bg-slate-50 p-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                    <MdHealthAndSafety />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Safety Monitoring
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Fall prevention and 24/7 home safety checks.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            {/* What’s included checklist */}
            <section className="space-y-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-lg font-semibold text-slate-900">
                What&apos;s Included
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Daily medication reminders",
                  "Meal preparation & nutrition",
                  "Light housekeeping & laundry",
                  "Transportation to appointments",
                  "Personal hygiene assistance",
                  "Social activity coordination",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-full bg-slate-50 px-3 py-1.5"
                  >
                    <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MdCheck className="text-xs" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Review highlight */}
            <section className="space-y-4 rounded-xl bg-slate-900 px-5 py-5 text-slate-50 shadow-sm ring-1 ring-slate-800/60 md:px-6 md:py-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-tr from-emerald-300 to-sky-300 ring-2 ring-slate-800" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sarah Jenkins
                  </p>
                  <p className="text-xs text-slate-300">
                    Verified Family Member
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-100">
                “Care.xyz provided a wonderful caregiver for my father. The
                peace of mind knowing he is safe and happy while I&apos;m at
                work is priceless. Their medication management system is
                top-notch.”
              </p>
            </section>
          </div>

          {/* Right column – sidebar */}
          <aside className="space-y-6">
            {/* Pricing card */}
            <section className="rounded-xl bg-white p-5 shadow-md ring-1 ring-slate-100">
              <div className="border-b border-slate-100 pb-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Price starting at
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-slate-900">
                    ${pricePerDay}
                  </span>
                  <span className="text-sm text-slate-500">/day</span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-slate-900">
                    ${pricePerHour}
                  </span>
                  <span className="text-sm text-slate-500">/hour</span>
                </div>
              </div>

              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="text-slate-500">Minimum session</div>
                  <div className="font-medium text-slate-900">3 Hours</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-slate-500">Response time</div>
                  <div className="font-medium text-slate-900">&lt; 2 Hours</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-slate-500">Caregiver matching</div>
                  <div className="font-medium text-emerald-600">Included</div>
                </div>
              </dl>

              <div className="mt-5 space-y-2">
                <Link
                  href={`/booking?serviceId=${_id}`}
                  className="btn btn-primary w-full justify-between rounded-lg"
                >
                  <span>Book Service</span>
                  <MdCalendarToday className="text-lg" />
                </Link>
                {/* <button className="btn btn-outline btn-primary w-full rounded-lg">
                  Free Consultation
                </button> */}
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                <span className="mt-0.5 text-slate-500">
                  <MdSecurity />
                </span>
                <span>Secure payments and 100% Satisfaction Guarantee.</span>
              </div>
            </section>

            {/* Why Care.xyz */}
            <section className="space-y-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-base font-semibold text-slate-900">
                Why Care.xyz?
              </h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <MdVerifiedUser className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      10-Point Background Check
                    </p>
                    <p className="text-xs text-slate-600">
                      Every caregiver is rigorously vetted.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <MdHealthAndSafety className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Safety-First Approach
                    </p>
                    <p className="text-xs text-slate-600">
                      Ongoing training and safety protocols for every caregiver.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <MdVolunteerActivism className="text-base" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Compassionate Care
                    </p>
                    <p className="text-xs text-slate-600">
                      We focus on emotional well-being as much as physical care.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
