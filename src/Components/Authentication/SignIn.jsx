import React, { use, useState } from "react";
import logo from "/Adobe Express - file (3).png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const SignIn = () => {
  const [error, setError] = useState(null);
  const { signIn,googleSignIn ,setLoading} = use(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true)
    signIn(email, password)
      .then(() => {
        setLoading(false)
        toast.success("Sign in successful") 
        navigate(`${location.state ?location.state:"/"}`)
      })
      .catch((error) => {
        toast.error("Sign in failed")
        const errorMessage = error.message;
        setError(errorMessage);  
      });
  };
  const handleGoogleSignUp = async () => {
    setLoading(true);
    const toastId = toast.loading("Checking credentials…");
  
    try {
      await googleSignIn();
      toast.dismiss(toastId); 
      toast.success("Sign in successful");
      navigate(location.state ? location.state : "/");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Sign in failed");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <img src={logo} alt="logo" className="w-40 mb-8 mx-auto block" />

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-slate-900 text-center text-3xl font-semibold">
              Sign in
            </h2>
            <form onSubmit={handleSignIn} className="mt-12 space-y-6">
              <button
                onClick={handleGoogleSignUp}
                type="button"
                className="gap-2 font-semibold text-lg cursor-pointer flex bg-white rounded-lg justify-center my-3 border w-full mx-auto items-center p-4 drop-shadow-2xl"
              >
                <span>
                  <FcGoogle size={25} />
                </span>{" "}
                Sign in with Google
              </button>
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              {error ? <p className="md:text-lg text-red-500">{error}</p> : ""}
              <div className="!mt-12 flex justify-center">
                <input
                  type="submit"
                  className=" cursor-pointer hover:bg-blue-700 bg-blue-600 rounded-xl px-10 py-4 text-white font-bold text-lg "
                  value="Sign In"
                />
              </div>
              <p className="text-slate-800 text-sm !mt-6 text-center">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
