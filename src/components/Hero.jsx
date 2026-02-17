import { MdVerifiedUser, MdSupportAgent, MdStar, MdSecurity } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-sky-50 via-white to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 md:flex-row md:items-center md:pb-24 md:pt-16 lg:px-6">
        {/* Left column */}
        <div className="flex-1 space-y-8">
          {/* Certified pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
              <MdVerifiedUser className="text-xl" />
            </span>
            <p className="text-sm font-medium text-sky-700">
              Certified &amp; Background Checked
            </p>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Trusted Care
              <br />
              Services For Your
              <br />
              Loved Ones.
            </h1>
            <p className="max-w-xl text-balance text-base text-slate-600 sm:text-lg">
              Connecting you with certified caregivers for children, seniors, and
              specialized medical needs—right in your neighborhood.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="btn btn-primary w-full gap-2 rounded-xl px-6 text-base font-semibold sm:w-auto">
              Find Caregiver
              <FaArrowRightLong className="text-sm" />
            </button>
            <button className="btn btn-outline btn-primary w-full rounded-xl px-6 text-base font-semibold sm:w-auto">
              Book Service
            </button>
          </div>

          {/* Trust signals */}
          <div className="grid gap-3 rounded-2xl bg-sky-50/80 p-4 text-sm text-slate-700 sm:grid-cols-3 sm:p-5">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <MdSecurity />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Insured
                </p>
                <p className="text-sm font-semibold text-slate-800">Full coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <MdSupportAgent />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Support
                </p>
                <p className="text-sm font-semibold text-slate-800">24/7 assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                <MdStar />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Rating
                </p>
                <p className="text-sm font-semibold text-slate-800">4.9/5 average</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column – hero image card */}
        <div className="relative flex-1">
          {/* Soft blurred orbs */}
          <div className="pointer-events-none absolute -left-6 top-4 h-40 w-40 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-4 bottom-10 h-40 w-40 rounded-full bg-indigo-200/70 blur-3xl" />

          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-100 bg-white/80 p-3 shadow-xl backdrop-blur">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-linear-to-tr from-sky-200 via-sky-100 to-fuchsia-100">
              {/* Background illustrative block (you can replace with a real image later) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(244,114,182,0.45),transparent_55%)]"  />
<img src="/hero_care.jpg" alt="" className="w-full object-cover scale-125 absolute top-5"/>
              {/* Caregiver profile overlay */}
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full border border-sky-100 bg-sky-200/60" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">
                      Sarah Jenkins
                    </p>
                    <p className="text-xs font-medium text-sky-600">
                      Certified Senior Specialist
                    </p>
                  </div>
                  <div className="badge badge-success gap-1 rounded-md border-none bg-emerald-50 text-[11px] font-semibold text-emerald-600">
                    <MdVerifiedUser className="text-sm" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

