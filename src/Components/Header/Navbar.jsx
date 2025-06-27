import React, { useState } from "react";
import logo from "/Adobe Express - file (3).png";
import bgNav from "../../assets/download.jpg";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useDarkMode } from "../../Contexts/theme/ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Loading from "../../Pages/Loading";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { user, logOut, loading } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Go to Home"
      >
        Home
      </NavLink>
      {/* <NavLink
        to="/share-tips"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Share gardening tips"
      >
        Share Tips
      </NavLink> */}
      <NavLink
        to="/explore-gardeners"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Meet expert gardeners"
      >
        Explore Gardeners
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Meet expert gardeners"
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/about"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Meet expert gardeners"
      >
      About Us
              </NavLink>
      <NavLink
        to="/browse-tips"
        className="hover:text-neutral-800 tooltip-link"
        data-tooltip-content="Browse community tips"
      >
        Browse Tips
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/dashboard"
            className="hover:text-neutral-800 tooltip-link"
            data-tooltip-content="Your submitted tips"
          >
            Dashboard
          </NavLink>
          {/*  // <NavLink
        //   to="/my-tips"
        //   className="hover:text-neutral-800 tooltip-link"
        //   data-tooltip-content="Your submitted tips"
        // >
        //   My Tips
        // </NavLink> */}
        </>
      )}
    </>
  );

  if (loading) return <Loading />;

  return (
    <nav>
      <Tooltip anchorSelect=".tooltip-link" place="bottom" />
      <Tooltip id="profile-tooltip" place="bottom" />

      {/* Desktop Navbar */}
      <div
        className="md:w-10/12 w-full mx-auto md:my-4 md:rounded-xl hidden md:block"
        style={{ backgroundImage: `url(${bgNav})` }}
      >
        <div className="flex items-center justify-between px-8 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer hover:scale-101"
          >
            <img src={logo} alt="logo" className="w-20" />
            <h4 className="-ml-4  text-2xl font-bold text-fuchsia-950 dark:text-green-800">
              Green Commandos
            </h4>
          </Link>

          {/* Nav Links */}
          <ul className="flex space-x-5 text-lg font-medium text-neutral-950 ">
            {navLinks}
          </ul>

          {/* User Section */}
          <div className="flex items-center gap-4 relative">
            {!user && (
              <>
                <Link
                  to="/signup"
                  className="border border-gray-700  px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-green-600 hover:border-0 text-gray-900 "
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="border border-gray-700  px-6 py-2 rounded-full font-semibold hover:text-white hover:bg-green-600 hover:border-0 text-gray-900 "
                >
                  Sign In
                </Link>
              </>
            )}

            {user && (
              <div className="relative dropdown dropdown-start">
                <div tabIndex={0} role="button" className="m-1">
                  <div
                    className="bg-blue-600 p-1 rounded-full cursor-pointer"
                    data-tooltip-id="profile-tooltip"
                    data-tooltip-content={user.displayName}
                  >
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={
                        user.photoURL ||
                        "https://img.icons8.com/?size=256&id=14736&format=png"
                      }
                      alt="Profile"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 dark:bg-gray-800 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-6 py-3 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800 font-medium rounded-lg"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Theme Switch */}
            <button onClick={handleTheme}>
              {darkMode ? (
                <CiLight className="text-white" size={37} />
              ) : (
                <MdDarkMode className="text-black" size={37} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar shadow-sm md:hidden">
        <div className="flex items-center justify-between w-full px-4">
          <div className="dropdown">
            <div className="flex items-center">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <button onClick={handleTheme}>
                {darkMode ? (
                  <CiLight className="text-white" size={25} />
                ) : (
                  <MdDarkMode size={25} />
                )}
              </button>
            </div>

            <ul
              tabIndex={0}
              style={{ backgroundImage: `url(${bgNav})` }}
              className="dark:text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-lg font-medium"
            >
              {navLinks}
              {!user && (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                </>
              )}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-30 text-left px-6 py-3 text-red-600 dark:text-red-400 bg-amber-50 font-medium rounded-lg"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-1">
            <img src={logo} className="w-12" alt="logo" />
            <p className="text-lg font-bold text-black">Green Commandos</p>
          </Link>

          {user && (
            <div
              className="bg-blue-600 p-1 rounded-full cursor-pointer relative"
              onClick={() => setShowLogout(!showLogout)}
              data-tooltip-id="profile-tooltip"
              data-tooltip-content="Tap for logout"
            >
              <img
                className="w-9 h-9 rounded-full object-cover"
                src={
                  user.photoURL ||
                  "https://img.icons8.com/?size=256&id=14736&format=png"
                }
                alt="Profile"
              />
              {showLogout && (
                <div className="absolute top-14 right-0 bg-white dark:bg-gray-800 rounded-lg shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-3 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800 font-medium rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
