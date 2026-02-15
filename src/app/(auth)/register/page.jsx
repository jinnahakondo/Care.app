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

    //save to db
    try {
      await postUser(userInfo);
      alert("registerd successfull");
      form.reset()
      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex ">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={(e) => handelRegister(e)} className="fieldset">
                  {/* name  */}
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Name"
                    />
                  </div>
                  {/* email  */}
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                  </div>
                  {/* nid Number  */}
                  <div>
                    <label className="label">Nid No.</label>
                    <input
                      type="number"
                      name="nidNumber"
                      className="input"
                      placeholder="Your Nid Number"
                    />
                  </div>
                  {/* contact Number  */}
                  <div>
                    <label className="label">Contact No.</label>
                    <input
                      type="number"
                      name="contactNumber"
                      className="input"
                      placeholder="Your Contact Number"
                    />
                  </div>
                  {/* password  */}
                  <div>
                    <label className="label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <Link href={"/login"} className="text-blue-500">
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
