import React from 'react';
import {MdFavorite} from "react-icons/md";

const Logo = () => {
    return (
         <div className="flex items-center gap-2 p-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#308ce8]">
          <MdFavorite className="text-xl text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Care.xyz
        </span>
      </div>
    );
};

export default Logo;