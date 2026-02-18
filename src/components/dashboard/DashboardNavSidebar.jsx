"use client";
import {
  MdDashboard,
  MdEventAvailable,
  MdPeopleOutline,
  MdChatBubbleOutline,
  MdPayments,
  MdSettings,
} from "react-icons/md";

import Logo from "@/components/Logo/Logo";
import { useSession } from "next-auth/react";
import DashBoardLink from "../Links/DashBordLinks/DashBoardLink";

const navLinks = [
  { icon: MdDashboard, label: "Overview", href: "/dashboard", active: true },
  { icon: MdEventAvailable, label: "Bookings", href: "/dashboard/my-bookings" },
  { icon: MdPeopleOutline, label: "Caregivers", href: "#" },
  { icon: MdChatBubbleOutline, label: "Messages", href: "#" },
  { icon: MdPayments, label: "Billing", href: "#" },
];

export default function DashboardNavSidebar() {
  const { data: session, status } = useSession();
  const role = session.user.role;

  return (
    <aside className="fixed flex h-full w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {/* Brand */}
      <div>
        <Logo />
      </div>
      {/* Navigation */}
      <nav className="mt-4 flex-1 space-y-1 px-4">
        {navLinks.map(({ icon: Icon, label, href }) => (
          <DashBoardLink key={label} href={href}>
            <Icon className="text-xl" />
            <span>{label}</span>
          </DashBoardLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-slate-200 p-4 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <img
            alt="User Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUrFATjl_vaTgxn2XqjOlIGZt_I2qSNEl8YWFVNtsXfJWvtU1md5TFUySZ4t7vikdrBRxoOzgYdigfEeJGLOGqwprHwQIW46YwPMEPNWh4eyF2nivtSNFxJAtal5Jlg2f4JNFuLwC57tpokdgp9UBVjRL2sniXvOLHVRc0aMDMTatiFqFr11PmkXVmPMst0SUV2Rc1L18T1Z1Twc1fsnj_bol58gu2L_tlWFtQK_UVADbrvbnZGsT0ROkMqo1slC1jobpoQq8vyBg"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-semibold">Sarah Jenkins</p>
            <p className="truncate text-xs text-slate-500">Premium Member</p>
          </div>
          <button className="text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200">
            <MdSettings className="text-lg" />
          </button>
        </div>
      </div>
    </aside>
  );
}
