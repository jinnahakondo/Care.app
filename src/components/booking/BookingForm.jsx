"use client";
import { FaChild, FaUserAlt, FaUserInjured } from "react-icons/fa";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function BookingForm({ service }) {
  const serviceInfo = JSON.parse(service);
  const [serviceType, setServiceType] = useState("child");
  const [durationType, setDurationType] = useState("hour");
  const [durationValue, setDurationValue] = useState(1);

  const { data: session } = useSession();
  const userId = session?.userId;

  //price calculation
  const price =
    durationType === "hour"
      ? serviceInfo?.pricePerHour * Number(durationValue)
      : serviceInfo?.pricePerDay * Number(durationValue);
  const serviceFee = (price / 100) * 5;
  const totalCost = price + serviceFee;

  //booking submit function
  const handleCareBooking = async (e) => {
    if (!userId) {
      return alert("please login first");
    }
    e.preventDefault();
    const form = e.target;
    const division = form.division.value;
    const district = form.district.value;
    const city = form.city.value;
    const area = form.area.value;
    const address = form.address.value;
    const bookingDate = new Date(form.bookingDate.value);

    const newBooking = {
      userId: String(userId),
      serviceId: String(serviceInfo._id),
      serviceType,
      durationType,
      durationValue: Number(durationValue),
      totalCost,
      bookingDate,
      location: { division, district, city, area, address },
    };

    try {
      const res = await fetch("https://care-zeta-ten.vercel.app/api/bookings", {
        method: "POST",
        body: JSON.stringify(newBooking),
      });
      alert("success");
      console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <section className="min-h-screen bg-base-200 p-6">
      <form
        onSubmit={(e) => handleCareBooking(e)}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {/* LEFT SECTION */}
        <div className="space-y-6 lg:col-span-2">
          {/* Service Type */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body space-y-6">
              <h2 className="flex items-center gap-2 font-semibold text-lg">
                <span className="text-primary">+</span>
                Service Type & durationType
              </h2>

              {/* Service Type Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  onClick={() => setServiceType("child")}
                  className={`${serviceType === "child" && "border-2 border-primary bg-primary/10"} border border-base-300 rounded-xl p-6 text-center hover:border-primary cursor-pointer transition`}
                >
                  <FaChild className="mx-auto text-2xl text-primary mb-2" />
                  <p className="font-medium">Child Care</p>
                </div>

                <div
                  onClick={() => setServiceType("elderly")}
                  className={`${serviceType === "elderly" && "border-2 border-primary bg-primary/10"} border border-base-300 rounded-xl p-6 text-center hover:border-primary cursor-pointer transition`}
                >
                  <FaUserAlt className="mx-auto text-2xl text-gray-500 mb-2" />
                  <p className="font-medium text-gray-600">Elderly Care</p>
                </div>

                <div
                  onClick={() => setServiceType("sick")}
                  className={`${serviceType === "sick" && "border-2 border-primary bg-primary/10"} border border-base-300 rounded-xl p-6 text-center hover:border-primary cursor-pointer transition`}
                >
                  <FaUserInjured className="mx-auto text-2xl text-gray-500 mb-2" />
                  <p className="font-medium text-gray-600">Sick Care</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* date */}
                <input
                  required
                  type="date"
                  name="bookingDate"
                  className="input"
                />
                {/* duration value  */}
                <select
                  required
                  onChange={(e) => setDurationValue(e.target.value)}
                  name="durationValue"
                  className="select"
                >
                  <option value="">select care duration</option>
                  <option value="1">1 Day</option>
                  <option value="7">7 Days</option>
                  <option value="15">15 Days</option>
                  <option value="30">30 Days</option>
                </select>
              </div>

              {/* durationType */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Service durationType Mode
                </p>

                <div className="join">
                  <button
                    type="button"
                    onClick={() => setDurationType("hour")}
                    className={`join-item btn btn-sm ${durationType === "hour" ? "btn-primary" : "btn-outline"}`}
                  >
                    Hourly
                  </button>
                  <button
                    type="button"
                    onClick={() => setDurationType("day")}
                    className={`join-item btn btn-sm ${durationType === "day" ? "btn-primary" : "btn-outline"}`}
                  >
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
                {/* division  */}
                <select
                  required
                  name="division"
                  className="select select-bordered w-full"
                >
                  <option>Dhaka</option>
                </select>
                {/* district */}
                <select
                  required
                  name="district"
                  className="select select-bordered w-full"
                >
                  <option>Dhaka North</option>
                </select>
                {/* city */}
                <select
                  required
                  name="city"
                  className="select select-bordered w-full"
                >
                  <option>Gulshan</option>
                </select>
                {/* area  */}
                <select name="area" className="select select-bordered w-full">
                  <option>Block C</option>
                </select>
              </div>

              <textarea
                required
                name="address"
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
              <p className="font-medium">
                Child Care ( {durationType === "hour" ? "Hourly" : "Daily"})
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Base Rate</span>
                <span>${price.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Service Fee (5%)</span>
                <span>${serviceFee.toFixed(2)}</span>
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
              <span className="text-primary text-xl font-bold">
                ${totalCost.toFixed(2)}
              </span>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full">
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
      </form>
    </section>
  );
}
