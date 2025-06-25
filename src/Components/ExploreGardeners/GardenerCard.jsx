import React from "react";

const GardenerCard = ({ gardener }) => {
  const {
    name,
    profileImage,
    gender,
    age,
    experience,
    totalTips,
    status,
    fromGoogle,
  } = gardener;

  return (
    <div className="border-green-900 border dark:border-white bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6 w-full max-w-sm mx-auto">
      <img
        src={profileImage || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
        {name || "Anonymous"}
      </h3>
    

      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
        <span className="font-medium">Status:</span> {status || "N/A"}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        <span className="font-medium">Age:</span> {age || "Not provided"}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        <span className="font-medium">Gender:</span> {gender || "Not specified"}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        <span className="font-medium">Experience:</span>{" "}
        {experience ? `${experience}` : "New Gardener"}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        <span className="font-medium">Tips Shared:</span>{" "}
        {typeof totalTips === "number" ? totalTips : 0}
      </p>

      {fromGoogle && (
        <p className="mt-3 text-blue-500 text-xs dark:text-blue-400">
          Signed up with Google
        </p>
      )}
    </div>
  );
};

export default GardenerCard;
