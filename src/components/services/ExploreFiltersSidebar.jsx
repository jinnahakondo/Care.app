import { MdCheck, MdStar, MdStarBorder } from "react-icons/md";

const serviceCategories = [
  { label: "Baby Care", checked: true },
  { label: "Elderly Care", checked: false },
  { label: "Sick Care", checked: false },
];

const languages = ["English", "Spanish", "French", "Mandarin"];

export default function ExploreFiltersSidebar() {
  return (
    <aside className="w-full space-y-8 lg:w-72 lg:shrink-0">
      {/* Service Category */}
      <section>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
          Service Category
        </h3>
        <div className="space-y-3">
          {serviceCategories.map((category) => (
            <label
              key={category.label}
              className="group flex cursor-pointer items-center gap-3"
            >
              <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md border-2 border-slate-300 transition-colors group-hover:border-[#2b8cee]">
                <input
                  type="checkbox"
                  defaultChecked={category.checked}
                  className="peer hidden"
                />
                <MdCheck className="hidden text-xs text-[#2b8cee] peer-checked:block" />
              </span>
              <span className="text-sm text-slate-600 transition-colors group-hover:text-slate-900">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Price Range */}
      <section className="border-t border-slate-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Price Range
          </h3>
          <span className="text-xs font-semibold text-[#2b8cee]">
            $15 - $50+
          </span>
        </div>

        <div className="relative mt-4 h-1.5 w-full rounded-full bg-slate-200">
          <div className="absolute left-0 right-1/4 h-full rounded-full bg-[#2b8cee]" />
          <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#2b8cee] bg-white shadow-sm" />
          <div className="absolute right-1/4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#2b8cee] bg-white shadow-sm" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>$10/hr</span>
          <span>$100+/hr</span>
        </div>
      </section>

      {/* Rating */}
      <section className="border-t border-slate-200 pt-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
          Caregiver Rating
        </h3>
        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="rating"
              className="border-slate-300 bg-transparent text-[#2b8cee] focus:ring-[#2b8cee]"
            />
            <div className="flex text-amber-400">
              <MdStar className="text-sm" />
              <MdStar className="text-sm" />
              <MdStar className="text-sm" />
              <MdStar className="text-sm" />
              <MdStarBorder className="text-sm" />
            </div>
            <span className="text-sm text-slate-600">4+ Stars</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="rating"
              className="border-slate-300 bg-transparent text-[#2b8cee] focus:ring-[#2b8cee]"
            />
            <div className="flex text-amber-400">
              <MdStar className="text-sm" />
              <MdStar className="text-sm" />
              <MdStar className="text-sm" />
              <MdStarBorder className="text-sm" />
              <MdStarBorder className="text-sm" />
            </div>
            <span className="text-sm text-slate-600">3+ Stars</span>
          </label>
        </div>
      </section>

      {/* Language */}
      <section className="border-t border-slate-200 pt-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
          Language
        </h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => {
            const isPrimary = index === 0;
            return (
              <button
                key={lang}
                type="button"
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                  isPrimary
                    ? "border-[#2b8cee33] bg-[#2b8cee1a] text-[#2b8cee]"
                    : "border-transparent bg-slate-100 text-slate-600 hover:border-slate-200"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

