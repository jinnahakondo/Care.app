import { FaChild, FaUserAlt, FaUserInjured } from "react-icons/fa";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

export default function BookingForm() {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT SECTION */}
        <div className="space-y-6 lg:col-span-2">
          {/* Service Type */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-6">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <span className="text-primary">+</span>
                Service Type & Duration
              </h2>

              {/* Service Type Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border-2 border-primary bg-primary/10 rounded-xl p-6 text-center cursor-pointer transition">
                  <FaChild className="mx-auto text-2xl text-primary mb-2" />
                  <p className="font-medium">Child Care</p>
                </div>

                <div className="border border-base-300 rounded-xl p-6 text-center hover:border-primary cursor-pointer transition">
                  <FaUserAlt className="mx-auto text-2xl text-gray-500 mb-2" />
                  <p className="font-medium text-gray-600">Elderly Care</p>
                </div>

                <div className="border border-base-300 rounded-xl p-6 text-center hover:border-primary cursor-pointer transition">
                  <FaUserInjured className="mx-auto text-2xl text-gray-500 mb-2" />
                  <p className="font-medium text-gray-600">Sick Care</p>
                </div>
              </div>

              {/* Duration */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Service Duration Mode
                </p>

                <div className="join">
                  <button className="join-item btn btn-sm btn-primary">
                    Hourly
                  </button>
                  <button className="join-item btn btn-sm btn-outline">
                    Daily
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-6">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <MdLocationOn className="text-primary" />
                Location Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="select select-bordered w-full">
                  <option>Dhaka</option>
                </select>

                <select className="select select-bordered w-full">
                  <option>Dhaka North</option>
                </select>

                <select className="select select-bordered w-full">
                  <option>Gulshan</option>
                </select>

                <select className="select select-bordered w-full">
                  <option>Block C</option>
                </select>
              </div>

              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Flat No, House Name, Street Details, nearby landmarks..."
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="card bg-base-100 shadow-md border border-base-300 h-fit">
          <div className="card-body space-y-5">
            <h2 className="font-semibold text-lg">Order Summary</h2>

            {/* Selected Service */}
            <div className="bg-base-200 rounded-lg p-4">
              <p className="text-xs text-gray-500">SERVICE SELECTED</p>
              <p className="font-medium">Child Care (Hourly)</p>
            </div>

            {/* Pricing */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Base Rate ($15/hr x 4)</span>
                <span>$60.00</span>
              </div>

              <div className="flex justify-between">
                <span>Service Fee (5%)</span>
                <span>$3.00</span>
              </div>

              <div className="flex justify-between">
                <span>VAT (Optional)</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="divider my-1"></div>

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Cost</span>
              <span className="text-primary text-xl font-bold">$63.00</span>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full">
              Confirm Booking →
            </button>

            {/* Guarantee */}
            <div className="bg-success/10 text-success text-sm rounded-lg p-3 flex items-center gap-2">
              <MdVerified />
              Guaranteed Safe Service
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-2">
                <IoShieldCheckmark />
                Secure encrypted checkout
              </div>
              <div>Free cancellation up to 24h before</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
