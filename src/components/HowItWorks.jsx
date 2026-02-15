const steps = [
  {
    id: 1,
    title: "Find Caregivers",
    description:
      "Browse through thousands of verified profiles in your local area based on your specific needs.",
  },
  {
    id: 2,
    title: "Match & Interview",
    description:
      "Shortlist candidates and conduct secure virtual or in-person interviews through our platform.",
  },
  {
    id: 3,
    title: "Secure Booking",
    description:
      "Confirm your caregiver with transparent pricing, built-in contracts, and secure payments.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
            Process
          </h2>
          <h3 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            How It Works
          </h3>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Getting the care you need is as easy as 1-2-3.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="absolute -top-4 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-lg">
                {step.id}
              </div>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

