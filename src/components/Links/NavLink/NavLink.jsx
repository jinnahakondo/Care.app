"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${pathName.endsWith(href) && "text-red-500"}`}
    >
      {children}
    </Link>
  );
}
