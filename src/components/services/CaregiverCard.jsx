import {
  MdFavoriteBorder,
  MdStar,
  MdVerified,
} from "react-icons/md";

// Single caregiver card used in the explore grid
export default function CaregiverCard({
  imageSrc,
  badgeLabel,
  badgeColorClass,
  name,
  subtitle,
  rate,
  rateSuffix = "/hr",
  ratingValue,
  ratingLabel,
  description,
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:shadow-[#2b8cee0d]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur bg-white/90 ${badgeColorClass}`}
        >
          {badgeLabel}
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
              {name}
            </h3>
            <div className="mt-1 flex items-center gap-1">
              <MdVerified className="text-xs text-emerald-500" />
              <span className="text-xs text-slate-500">{subtitle}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#2b8cee]">
              {rate}
              <span className="text-sm font-medium text-slate-400">
                {rateSuffix}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-1">
          <MdStar className="text-sm text-amber-400" />
          <span className="text-sm font-bold text-slate-700">
            {ratingValue}
          </span>
          <span className="text-sm text-slate-400">{ratingLabel}</span>
        </div>

        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <button
          type="button"
          className="w-full rounded-lg bg-[#2b8cee1a] py-3 text-sm font-bold text-[#2b8cee] transition-all hover:bg-[#2b8cee] hover:text-white"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

