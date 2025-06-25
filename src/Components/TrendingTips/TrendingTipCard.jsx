import React from "react";

const TrendingTipCard = ({ tip }) => {
  const { image, title, description, userName } = tip;

  return (
    <div className="bg-green-900 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title || "Tip"}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-green-700 flex items-center justify-center text-white">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white dark:text-green-300 text-center min-h-[48px]">
          {title || "Untitled Tip"}
        </h3>

        {/* Description */}
        <p className="text-white dark:text-gray-300 text-sm mt-2 mb-4 flex-grow">
          {description
            ? description.length > 100
              ? `${description.slice(0, 100)}...`
              : description
            : "No description provided."}
        </p>

        {/* Author */}
        <div className="text-xs text-right text-white dark:text-gray-400">
          {userName ? `By: ${userName}` : "By: Anonymous"}
        </div>
      </div>
    </div>
  );
};

export default TrendingTipCard;
