import {
  MdVolunteerActivism,
  MdDashboard,
  MdEventAvailable,
  MdPersonSearch,
  MdChatBubbleOutline,
  MdPayments,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";

const linksTop = [
  { icon: MdDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: MdEventAvailable, label: "My Bookings", href: "/dashboard/bookings", active: true },
  { icon: MdPersonSearch, label: "Find Care", href: "/#services" },
  { icon: MdChatBubbleOutline, label: "Messages", href: "/dashboard/messages", badge: "3" },
  { icon: MdPayments, label: "Invoices", href: "/dashboard/invoices" },
];

const linksBottom = [
  { icon: MdSettings, label: "Settings", href: "/dashboard/settings" },
  { icon: MdLogout, label: "Logout", href: "/logout", danger: true },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-full rounded-2xl border border-sky-100 bg-white shadow-sm md:w-64">
      {/* Brand */}
      <div className="flex items-center gap-3 border-b border-sky-100 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm">
          <MdVolunteerActivism className="text-xl" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          Care.xyz
        </span>
      </div>

      {/* Nav groups */}
      <div className="flex flex-col justify-between px-3 py-3 text-sm text-slate-600">
        <nav className="space-y-1">
          {linksTop.map(({ icon: Icon, label, href, active, badge }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                active
                  ? "bg-sky-500 text-white shadow-sm"
                  : "hover:bg-slate-50"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={`text-lg ${
                    active ? "text-white" : "text-slate-500"
                  }`}
                />
                <span className="font-medium">{label}</span>
              </span>
              {badge && (
                <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700">
                  {badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-4 border-t border-sky-100 pt-3 space-y-1">
          {linksBottom.map(({ icon: Icon, label, href, danger }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50 ${
                danger ? "text-red-500" : ""
              }`}
            >
              <Icon
                className={`text-lg ${
                  danger ? "text-red-500" : "text-slate-500"
                }`}
              />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

