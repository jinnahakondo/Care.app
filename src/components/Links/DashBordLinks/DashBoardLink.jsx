"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashBoardLink({ children, href }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathName.endsWith(href)
          ? "bg-[#308ce8]/10 font-semibold text-[#308ce8]"
          : "text-slate-500 hover:bg-slate-100 "
      } flex items-center gap-3 rounded-lg px-4 py-3 transition-colors dark:text-slate-400 dark:hover:bg-slate-800`}
    >
      {children}
    </Link>
  );
}
