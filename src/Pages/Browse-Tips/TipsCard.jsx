import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { BiCategory } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const TipsCard = () => {
  const [liked, setLiked] = useState(false);
  const tip = useLoaderData();
  const {
    title,
    image,
    description,
    category,
    userName,
    difficulty,
    likes,
    _id,
  } = tip;
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikes = () => {
    if (liked) return; // prevent multiple clicks

    setLiked(true);
    setLikeCount(likeCount + 1);

    fetch(`https://green-comm-backend.vercel.app/tip/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ likes: likeCount + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Like updated:", data);
      })
      .catch((err) => {
        console.error("Error updating likes:", err);
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-green-200 dark:border-green-700 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-green-300 dark:hover:shadow-green-600 duration-300 md:my-6 my-2">
      {/* Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl md:text-2xl font-extrabold text-green-800 dark:text-green-400">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
            <span className="badge bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 font-semibold px-3 py-1 rounded-full">
              Difficulty: {difficulty}
            </span>
            <span className="badge bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <BiCategory /> {category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="pt-2 flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            <FaUserAlt className="text-green-600 dark:text-green-400" />
            <p className="text-xl font-medium dark:text-gray-100">
              <span className="font-semibold">By:</span> {userName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {likeCount}
            </p>

            <button
              disabled={liked}
              onClick={handleLikes}
              aria-label={liked ? "Liked" : "Like this tip"}
              className={`transition-opacity duration-300 ${
                liked ? "opacity-50 cursor-not-allowed" : "hover:text-green-700"
              } focus:outline-none focus:ring-2 focus:ring-green-400 rounded`}
              type="button"
            >
              {liked ? (
                <AiFillLike size={35} className="text-green-600 dark:text-green-400" />
              ) : (
                <AiOutlineLike size={35} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
