"use client";
import { postUser } from "@/action/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const userInfo = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      nidNumber: form.nidNumber.value,
      contactNumber: form.contactNumber.value,
    };

    try {
      await postUser(userInfo);
      alert("registerd successfull");
      form.reset();
      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-white px-4">
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Text */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Create Account 
          </h1>

          <p className="text-gray-500 max-w-md">
            Register to get started. Manage your services, bookings and profile
            easily from your dashboard.
          </p>
        </div>

        {/* Register Card */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Register Account
            </h2>

            <form onSubmit={(e) => handelRegister(e)} className="space-y-5">

              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* NID */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  NID Number
                </label>
                <input
                  type="number"
                  name="nidNumber"
                  placeholder="Enter your NID number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Contact */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Contact Number
                </label>
                <input
                  type="number"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Button */}
              <button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200">
                Register
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
