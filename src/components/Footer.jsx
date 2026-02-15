import { MdVolunteerActivism, MdAlternateEmail, MdSend } from "react-icons/md";
import { FaFacebookF, FaRss } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 pt-12 text-slate-800 md:pt-16">
      <div className="mx-auto max-w-6xl px-4 pb-8 lg:px-6 lg:pb-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_repeat(2,minmax(0,1fr))_minmax(0,1.3fr)]">
          {/* Brand + mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-content">
                <MdVolunteerActivism className="text-xl" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                Care.xyz
              </span>
            </div>
            <p className="max-w-sm text-sm text-slate-600">
              We're on a mission to ensure every family has access to safe,
              professional, and compassionate care. Quality care is a human
              right.
            </p>
            <div className="flex gap-3">
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                <FaFacebookF className="text-sm" />
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                <FaRss className="text-sm" />
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                <MdAlternateEmail className="text-base" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h6 className="text-sm font-semibold tracking-wide text-slate-900">
              Services
            </h6>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Child Care</li>
              <li>Senior Care</li>
              <li>Special Needs</li>
              <li>Housekeeping</li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h6 className="text-sm font-semibold tracking-wide text-slate-900">
              Company
            </h6>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>About Us</li>
              <li>Safety Center</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h6 className="text-sm font-semibold tracking-wide text-slate-900">
              Newsletter
            </h6>
            <p className="text-sm text-slate-600">
              Get caregiving tips and news delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <label className="input input-bordered flex h-11 grow items-center gap-2 rounded-xl bg-white text-sm">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent outline-none"
                />
              </label>
              <button className="btn btn-primary h-11 rounded-xl px-4 text-sm font-semibold">
                <MdSend className="text-lg" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500 md:mt-12 md:flex md.items-center md:justify-between">
          <p>© 2024 Care.xyz Inc. All rights reserved.</p>
          <div className="mt-2 flex gap-4 md:mt-0">
            <button className="hover:text-slate-700">Terms of Service</button>
            <button className="hover:text-slate-700">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

