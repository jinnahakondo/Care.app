export default function LocationForm() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold">
        <span className="material-icons text-[#2b9dee]">location_on</span>
        Location Details
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Division</label>
          <select className="w-full rounded-lg border-slate-200 bg-white focus:border-[#2b9dee] focus:ring-[#2b9dee] dark:border-slate-700 dark:bg-slate-800">
            <option>Select Division</option>
            <option selected>Dhaka</option>
            <option>Chittagong</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">District</label>
          <select className="w-full rounded-lg border-slate-200 bg-white focus:border-[#2b9dee] focus:ring-[#2b9dee] dark:border-slate-700 dark:bg-slate-800">
            <option>Select District</option>
            <option selected>Dhaka North</option>
            <option>Dhaka South</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">City / Municipality</label>
          <select className="w-full rounded-lg border-slate-200 bg-white focus:border-[#2b9dee] focus:ring-[#2b9dee] dark:border-slate-700 dark:bg-slate-800">
            <option>Select City</option>
            <option selected>Gulshan</option>
            <option>Banani</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Area / Neighborhood</label>
          <select className="w-full rounded-lg border-slate-200 bg-white focus:border-[#2b9dee] focus:ring-[#2b9dee] dark:border-slate-700 dark:bg-slate-800">
            <option>Select Area</option>
            <option selected>Block C</option>
            <option>Block D</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold">
            Detailed Address / Landmarks
          </label>
          <textarea
            className="w-full rounded-lg border-slate-200 bg-white focus:border-[#2b9dee] focus:ring-[#2b9dee] dark:border-slate-700 dark:bg-slate-800"
            placeholder="Flat No, House Name, Street Details, nearby landmarks..."
            rows="3"
          />
        </div>
      </div>
    </section>
  );
}
