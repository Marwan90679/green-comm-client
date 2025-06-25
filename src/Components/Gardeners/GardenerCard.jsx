import React from 'react';

const GardenerCard = ({ gardener }) => {
  const { name, location, profileImage, experience, specialties, bio } = gardener;

  return (
    <div className="card bg-green-50 border border-green-200 shadow-md p-4 rounded-xl">
      <figure className="w-full h-48 overflow-hidden rounded-xl">
        <img src={profileImage} alt={name} className=" object-cover" />
      </figure>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-green-900">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-700">Experience: {experience}</p>
        <div className="flex flex-wrap gap-2">
          {specialties.map((spec, i) => (
            <span
              key={i}
              className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {spec}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

export default GardenerCard;
