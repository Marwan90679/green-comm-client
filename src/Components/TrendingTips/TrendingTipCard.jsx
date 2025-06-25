import React from "react";

const TrendingTipCard = ({ tip }) => {
  return (
    <div className="bg-green-900 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image */}
      {tip.image && (
        <img
          src={tip.image}
          alt={tip.title}
          className="w-full h-40 object-cover"
        />
      )}

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-green-300  min-h-[56px] flex items-center justify-center text-center">
          {tip.title}
        </h3>

        {/* Description */}
        <p className="text-white dark:text-gray-300 text-sm mt-2 mb-4 flex-grow">
          {tip.description.length > 100
            ? tip.description.slice(0, 100) + "..."
            : tip.description}
        </p>

        {/* Author */}
        <div className="text-sm text-white dark:text-gray-400 text-right">
          <span>By: {tip.userName}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingTipCard;
