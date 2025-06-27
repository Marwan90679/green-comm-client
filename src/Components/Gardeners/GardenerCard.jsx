import React from 'react';

const GardenerCard = ({ gardener }) => {
  const {
    name = "Anonymous Gardener",
    location = "Unknown Location",
    profileImage,
    experience = "Less than 1 year",
    specialties = [],
    bio = "No bio available yet.",
  } = gardener;

  return (
    <div className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-green-700 shadow-md hover:shadow-lg transition rounded-xl overflow-hidden">
      <figure className="w-full h-48 md:h-56 bg-gray-200 dark:bg-gray-700">
        <img
          src={profileImage || "https://via.placeholder.com/400x250?text=No+Image"}
          alt={name}
          loading='lazy'
          className="w-full h-full object-cover "
        />
      </figure>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-green-900 dark:text-green-300">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-medium">Experience:</span> {experience}
        </p>

        {specialties.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec, i) => (
              <span
                key={i}
                className="bg-green-200 dark:bg-green-600 text-green-900 dark:text-white px-2 py-1 rounded-full text-xs font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-700 dark:text-gray-300">{bio}</p>
      </div>
    </div>
  );
};

export default GardenerCard;
