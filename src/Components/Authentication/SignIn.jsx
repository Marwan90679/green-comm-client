import React, { use, useState } from "react";
import logo from "/Adobe Express - file (3).png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const SignIn = () => {
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const { signIn, googleSignIn, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    signIn(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Sign in successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error("Sign in failed");
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

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="">
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
                className="gap-2 font-semibold text-lg cursor-pointer dark:text-white flex bg-white dark:bg-green-800 rounded-lg justify-center my-3 border w-full mx-auto items-center p-4 drop-shadow-2xl"
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
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
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
                    type={showPass ? "text" : "password"}
                    required
                    className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600 pr-10"
                    placeholder="Enter password"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    {showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-green-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              {error && <p className="md:text-lg text-red-500">{error}</p>}
              <div className="!mt-12 flex justify-center">
                <input
                  type="submit"
                  className="cursor-pointer hover:bg-green-700 bg-green-600 rounded-xl px-10 py-4 text-white font-bold text-lg"
                  value="Sign In"
                />
              </div>
              <p className="text-slate-800 text-sm !mt-6 text-center">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="text-green-600 hover:underline ml-1 whitespace-nowrap font-semibold"
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