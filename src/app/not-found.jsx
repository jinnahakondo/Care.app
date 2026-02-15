import Link from "next/link";
import {
  MdSearch,
  MdHome,
  MdMedicalServices,
  MdChildCare,
  MdElderly,
  MdGroups,
} from "react-icons/md";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Illustration */}
        <div className="relative mb-10 flex h-64 w-full items-center justify-center">
          <div className="absolute h-40 w-72 rounded-full bg-linear-to-r from-sky-200/60 via-sky-100 to-sky-200/60 blur-3xl" />
          <div className="relative flex flex-col items-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                <MdSearch className="text-5xl" />
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-sky-500 px-4 py-2 text-white shadow-md">
              <MdSearch className="text-xl" />
            </div>
          </div>
        </div>

        {/* Heading & text */}
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Oops! Page not found
        </h1>
        <p className="mt-4 max-w-xl text-balance text-sm text-slate-600 sm:text-base">
          It looks like the page you are looking for has been moved or doesn&apos;t
          exist. Don&apos;t worry, we&apos;re here to help you get back on track.
        </p>

        {/* Primary actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-600"
          >
            <MdHome className="text-lg" />
            <span>Back to Home</span>
          </Link>
          <button className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Contact Support
          </button>
        </div>

        {/* Helpful links */}
        <div className="mt-10 w-full border-t border-slate-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Looking for something else?
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/#services"
              className="flex flex-col items-center gap-2 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <MdChildCare className="text-xl text-sky-500" />
              <span>Child Care</span>
            </Link>
            <Link
              href="/services/elderly-care"
              className="flex flex-col items-center gap-2 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <MdElderly className="text-xl text-sky-500" />
              <span>Elderly Care</span>
            </Link>
            <Link
              href="/#services"
              className="flex flex-col items-center gap-2 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <MdMedicalServices className="text-xl text-sky-500" />
              <span>Sick Care</span>
            </Link>
            <Link
              href="/#reviews"
              className="flex flex-col items-center gap-2 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <MdGroups className="text-xl text-sky-500" />
              <span>Our Caregivers</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

