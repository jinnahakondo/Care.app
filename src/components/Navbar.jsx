"use client";
import { signOut, useSession } from "next-auth/react";
import Logo from "./Logo/Logo";
import NavLink from "./Links/NavLink/NavLink";
import Link from "next/link";


export default function Navbar() {
  const session = useSession();
  console.log(session);
  const links = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/services">Services </NavLink>
      <NavLink href="/about">About </NavLink>
      <NavLink href="/dashboard">dashboard</NavLink>
      {session.status === "authenticated" ? (
        <>
          <button
            onClick={() => signOut()}
            className="btn btn-primary btn-sm rounded-full px-5 normal-case"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-800 hover:border-slate-300 hover:bg-slate-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="btn btn-primary btn-sm rounded-full px-5 normal-case"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 lg:px-6">
        {/* Logo
         */}
        <Logo />

        {/* Nav links */}
        <div className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex">
          {links}
        </div>
      </nav>
    </header>
  );
}
