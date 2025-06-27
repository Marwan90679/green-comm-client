import React, { useEffect, useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, Outlet } from "react-router"; // Changed from "react-router"
import logo from "/Adobe Express - file (3).png";
import { useDarkMode } from "../Contexts/theme/ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AuthContext } from "../Contexts/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({});
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://green-comm-backend.vercel.app/dashboard-stats/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setStats(data));
    }
  }, [user?.email]);

  const handleTheme = () => setDarkMode(!darkMode);

  return (
    <div className='drawer lg:drawer-open dark:bg-gray-950 bg-white dark:text-white'>
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between px-4 py-2 border-b shadow-md z-10 bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-4">
            <label htmlFor="sidebar-drawer" className="btn btn-ghost lg:hidden">
              <FiMenu size={24} />
            </label>
            <img src={logo} alt="Logo" className="w-24" />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="font-semibold hover:underline">Home</Link>
            <button onClick={handleTheme}>
              {darkMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
            </button>
          </div>
        </div>

        {/* Render children */}
        <div className="px-6 pb-6 flex-1 bg-white dark:bg-gray-900">
          <Outlet context={{stats}} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-30">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <div className={`w-64 min-h-screen p-4 border-r ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
          <ul className="menu space-y-2">
            <li>
              <Link to="/dashboard" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
            </li>
            <li>
              <Link to="my-tips" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">My Tips</Link>
            </li>
            <li>
              <Link to="share-tips" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Share Tips</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;