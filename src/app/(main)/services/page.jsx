import ExploreSearchBar from "@/components/services/ExploreSearchBar";
import ExploreFiltersSidebar from "@/components/services/ExploreFiltersSidebar";
import ServiceCard from "@/components/services/ServiceCard";
import ExplorePagination from "@/components/services/ExplorePagination";
import { getServices } from "@/lib/api/services";

export const metadata = {
  title: "Care.app - Explore Services",
};
export const dynamic = "force-dynamic";
export default async function ServicesExplorePage() {
  const services = await getServices();

  return (
    <div className="bg-[#f6f7f8] text-slate-900">
      {/* Search hero */}
      <ExploreSearchBar />

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar filters */}
          <ExploreFiltersSidebar />

          {/* Results */}
          <section className="grow">
            {/* Header */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  Caregivers in New York
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  124 professionals available near you
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Sort by:</span>
                <select className="cursor-pointer border-none bg-transparent text-slate-900 font-semibold focus:ring-0">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services?.map((service) => (
                <ServiceCard key={service?._id} service={service} />
              ))}
            </div>

            {/* Pagination */}
            <ExplorePagination />
          </section>
        </div>
      </main>
    </div>
  );
}
