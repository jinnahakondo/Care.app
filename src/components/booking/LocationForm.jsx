export default function LocationForm({ bookingInfo, setBookingInfo }) {
  const handleLocationChange = (field, value) => {
    setBookingInfo({
      ...bookingInfo,
      location: {
        ...bookingInfo.location,
        [field]: value,
      },
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold">
        <span className="material-icons text-[#2b9dee]">location_on</span>
        Location Details
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Division */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Division</label>
          <select
            value={bookingInfo.location.division}
            onChange={(e) => handleLocationChange("division", e.target.value)}
            className="w-full rounded-lg border-slate-200 bg-white p-3"
          >
            <option value="">Select Division</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
          </select>
        </div>

        {/* District */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">District</label>
          <select
            value={bookingInfo.location.district}
            onChange={(e) => handleLocationChange("district", e.target.value)}
            className="w-full rounded-lg border-slate-200 bg-white p-3"
          >
            <option value="">Select District</option>
            <option value="dhaka-north">Dhaka North</option>
            <option value="dhaka-south">Dhaka South</option>
          </select>
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">City</label>
          <select
            value={bookingInfo.location.city}
            onChange={(e) => handleLocationChange("city", e.target.value)}
            className="w-full rounded-lg border-slate-200 bg-white p-3"
          >
            <option value="">Select City</option>
            <option value="gulshan">Gulshan</option>
            <option value="banani">Banani</option>
          </select>
        </div>

        {/* Area */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Area</label>
          <select
            value={bookingInfo.location.area}
            onChange={(e) => handleLocationChange("area", e.target.value)}
            className="w-full rounded-lg border-slate-200 bg-white p-3"
          >
            <option value="">Select Area</option>
            <option value="block-c">Block C</option>
            <option value="block-d">Block D</option>
          </select>
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold">Address</label>
          <textarea
            value={bookingInfo.location.address}
            onChange={(e) => handleLocationChange("address", e.target.value)}
            rows="3"
            placeholder="Flat No, House Name, Street Details..."
            className="w-full rounded-lg border-slate-200 bg-white p-3"
          />
        </div>
      </div>
    </section>
  );
}
