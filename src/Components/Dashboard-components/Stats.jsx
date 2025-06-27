import React, { useContext, useMemo } from "react";
import dashboardImg from "../../assets/Control Panel-bro.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { useOutletContext } from "react-router";
import { format, differenceInDays } from "date-fns";
import ClockComponent from "./ClockComponent";
import { toast, ToastContainer } from "react-toastify";

const Stats = () => {
  const { user, verifyEmail } = useContext(AuthContext);
  const { stats } = useOutletContext();

  // Memoize user data calculations
  const userDetails = useMemo(() => {
    const getMemberDuration = () => {
      if (!user?.metadata?.creationTime) return "N/A";
      try {
        const createdDate =
          user.metadata.creationTime?.toDate?.() ||
          new Date(user.metadata.creationTime);
        return `${differenceInDays(new Date(), createdDate)} days`;
      } catch {
        return "N/A";
      }
    };

    const formatDate = (timestamp) => {
      if (!timestamp) return "Not available";
      try {
        const date = timestamp?.toDate?.() || new Date(timestamp);
        return format(date, "MMM dd, yyyy - h:mm a");
      } catch {
        return "Invalid date";
      }
    };

    return {
      memberDuration: getMemberDuration(),
      lastLogin: formatDate(user?.metadata?.lastSignInTime),
      accountCreated: formatDate(user?.metadata?.creationTime),
      emailVerified: user?.emailVerified,
      email: user?.email,
      displayName: user?.displayName || "Gardener",
    };
  }, [user]);

  const handleVerifyEmail = async () => {
    
    try {
      await verifyEmail();
      toast.success("Verification email sent! Please check your inbox.");
    } catch (error) {
      toast.error(`Failed to send verification: ${error.message}`);
    }
  };

  return (
    <div className="p-6 space-y-10 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <ToastContainer></ToastContainer>
      {/* User Profile Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-6">
        {/* User Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-green-400">
            Welcome, {userDetails.displayName}!
          </h2>

          {/* User Details Card */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-2">
                  Account Information
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-32 font-medium">Email:</span>
                    <span className="truncate">
                      {userDetails.email || "Not provided"}
                    </span>
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-32 font-medium">Status:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        userDetails.emailVerified
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {userDetails.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </p>
                  {!userDetails.emailVerified && (
                    <div className="pt-2">
                      <button
                        onClick={handleVerifyEmail}
                        className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                      >
                        Verify Email
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Activity Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-2">
                  Activity
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-32 font-medium">Member for:</span>
                    <span>{userDetails.memberDuration}</span>
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-32 font-medium">Last login:</span>
                    <span>{userDetails.lastLogin}</span>
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-32 font-medium">Account created:</span>
                    <span>{userDetails.accountCreated}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-300 p-5 rounded-lg shadow-lg font-medium">
            🌿 "The best time to plant a tree was 20 years ago. The second best
            time is now."
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={dashboardImg}
            alt="Dashboard Visual"
            className="max-w-sm w-full rounded-lg"
          />
        </div>
      </div>

      {/* Centered Statistics Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Community Stats */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Community Overview
            </h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl">
                  Total Gardeners:
                </span>
                <span className="font-bold text-green-600 dark:text-green-400 text-xl lg:text-2xl">
                  {stats?.totalGardeners || 0}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl">
                  Active Gardeners:
                </span>
                <span className="font-bold text-green-600 dark:text-green-400 text-xl lg:text-2xl">
                  {stats?.activeGardeners || 0}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl">
                  Inactive Gardeners:
                </span>
                <span className="font-bold text-red-600 dark:text-red-400 text-xl lg:text-2xl">
                  {stats?.inactiveGardeners || 0}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl">
                  My Tips:
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-xl lg:text-2xl">
                  {stats?.myTipsCount || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Time Information */}
          <ClockComponent />

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg text-lg lg:text-xl font-medium transition-colors duration-300">
                Share a New Tip
              </button>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-lg lg:text-xl font-medium transition-colors duration-300">
                Browse Community Tips
              </button>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg text-lg lg:text-xl font-medium transition-colors duration-300">
                View My Garden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;