import Link from "next/link";
import React from "react";
import { MdFavorite } from "react-icons/md";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 p-6 cursor-pointer">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <MdFavorite className="text-xl text-white" />
      </span>
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        Care.xyz
      </span>
    </Link>
  );
};

export default Logo;
