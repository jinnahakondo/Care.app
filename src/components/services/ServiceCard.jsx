import Image from "next/image";
import Link from "next/link";
import { MdFavoriteBorder, MdStar, MdVerified } from "react-icons/md";

// Single caregiver card used in the explore grid
export default function ServiceCard({ service }) {
  const {
    _id,
    serviceName,
    category,
    description,
    pricePerHour,
    pricePerDay,
    image,
  } = service;
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:shadow-[#2b8cee0d]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={serviceName}
          width={100}
          height={100}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur bg-white/90 `}
        >
          {category}
        </div>
        <button
          type="button"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm transition-colors hover:text-red-500"
        >
          <MdFavoriteBorder className="text-sm" />
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold leading-tight text-slate-900">
              {serviceName}
            </h3>
            <div className="mt-1 flex items-center gap-1">
              <MdVerified className="text-xs text-emerald-500" />
              <span className="text-xs text-slate-500">Care.app</span>
            </div>
          </div>
          <div className="text-right"></div>
        </div>

        <div className="mb-4 flex items-center gap-1">
          <MdStar className="text-sm text-amber-400" />
          <span className="text-sm font-bold text-slate-700">
            4.7 (22 reviews)
          </span>
        </div>

        <Link
          href={`/services/${_id}`}
          className="btn w-full rounded-lg bg-[#2b8cee1a] py-3 text-sm font-bold text-[#2b8cee] transition-all hover:bg-[#2b8cee] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
