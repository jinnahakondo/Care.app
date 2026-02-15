export default function CallToAction() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-primary text-primary-content px-6 py-10 md:px-10 md:py-14">
          {/* Blur orbs */}
          <div className="pointer-events-none absolute -left-16 top-0 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to find the perfect care?
              </h2>
              <p className="text-sm text-primary-content/80 sm:text-base">
                Join over 10,000 families who have found peace of mind with our
                network of qualified, empathetic caregivers.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm font-semibold md:flex-row">
              <button className="btn bg-white text-primary hover:bg-slate-100">
                Get Started Today
              </button>
              <button className="btn btn-outline border-white/70 bg-transparent text-primary-content hover:border-white hover:bg-primary/10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

