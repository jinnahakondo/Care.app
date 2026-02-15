import { MdStar, MdChevronLeft, MdChevronRight } from "react-icons/md";

const testimonials = [
  {
    quote:
      '“Care.xyz gave me peace of mind when I had to return to work. Our nanny, Mia, is like family now. The vetting process is truly top-notch.”',
    name: "Emily Richardson",
    role: "Mother of 2",
    accent: "bg-sky-200",
  },
  {
    quote:
      "“Finding post-operative care for my father was stressful until we used Care.xyz. The medical professional they matched us with was outstanding.”",
    name: "David Miller",
    role: "Family Caretaker",
    accent: "bg-emerald-200",
  },
  {
    quote:
      "“The elderly care companion we found for my mom has completely changed her quality of life. She's happier and more active than she's been in years.”",
    name: "Sophia Chen",
    role: "Daughter & Member",
    accent: "bg-fuchsia-200",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              What Our Families Say
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Real stories from the families we support every day.
            </p>
          </div>

          {/* Arrow controls (static, to match design) */}
          <div className="inline-flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
              <MdChevronLeft />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg">
              <MdChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-100"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <MdStar key={idx} />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                {item.quote}
              </p>

              {/* Reviewer */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${item.accent} bg-linear-to-tr from-white/50`}
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

