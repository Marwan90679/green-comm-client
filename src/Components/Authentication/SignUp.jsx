import React, { use,  useState } from "react";
import logo from "/Adobe Express - file (3).png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast as toast } from "react-toastify";
const SignUp = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser, setUser, googleSignIn, setLoading, updateUserInfo } =
    use(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location=useLocation();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const signUpData = Object.fromEntries(formData.entries());
    const { email, password, name, photo } = signUpData;
    setLoading(true);
    createUser(email, password)
    .then((userCredential) => {
      const signedUpUser = userCredential.user;
      toast.success("Sign Up successful")
      updateUserInfo({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...signedUpUser, displayName: name, photoURL: photo });
          setLoading(false);
          navigate(`${location.state ?location.state:"/"}`)
        })
        .catch(() => {
          setUser(signedUpUser);
          setLoading(false); // 
          navigate("/");     // 
        });
    })
    .catch((error) => {
      toast.error("Sign Up failed")
      setLoading(false); // 
      setError(error.message); 
    });
  
  };

 

 const handleGoogleSignUp = async () => {
    setLoading(true);
    const toastId = toast.loading("Validating credentials…");
    try {
      await googleSignIn();
      toast.dismiss(toastId); 
      toast.success("Sign Up successful");
      navigate(location.state ? location.state : "/");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Sign Up failed");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drop-shadow-2xl drop-shadow-emerald-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <img src={logo} alt="logo" className="w-40 mb-8 mx-auto block" />
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-slate-900 text-center text-3xl font-semibold">
              Sign Up
            </h2>
            <form onSubmit={handleSignUp}>
              <button
                onClick={handleGoogleSignUp}
                type="button"
                className="gap-2 font-semibold text-lg cursor-pointer flex bg-white rounded-lg justify-center my-3 border w-full mx-auto items-center p-4 drop-shadow-2xl"
              >
                <span>
                  <FcGoogle size={25} />
                </span>{" "}
                Sign Up with Google
              </button>
              <div className="space-y-6">
                <div>
                  <label className="text-slate-800 text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-slate-800 text-sm font-medium mb-2 block">
                    Email Id
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-slate-800 text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <input
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$"
                    name="password"
                    type="password"
                    className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label className="text-slate-800 text-sm font-medium mb-2 block">
                    Photo URL
                  </label>
                  <input
                    name="photo"
                    type="text"
                    className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Photo URL"
                  />
                </div>
                {error ? (
                  <p className="md:text-lg text-red-500">{error}</p>
                ) : (
                  ""
                )}
                <div className="flex items-center ">
                  <input
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="cursor-pointer h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-slate-800 ml-3 block text-sm "
                  >
                    I accept the{" "}
                    <Link
                      to="/terms&conditions"
                      className="text-blue-600 font-medium hover:underline ml-1 cursor-pointer"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>

              <div className="!mt-12 flex justify-center">
                <input
                  type="submit"
                  className=" cursor-pointer hover:bg-blue-700 bg-blue-600 rounded-xl px-10 py-4 text-white font-bold text-lg "
                  value="Sign Up"
                />
              </div>
              <p className="text-slate-800 text-sm mt-6 text-center">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  className="text-blue-600 font-medium hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
