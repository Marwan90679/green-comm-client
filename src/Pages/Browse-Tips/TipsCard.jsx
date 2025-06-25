import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { BiCategory } from "react-icons/bi";
import { GiGardeningShears } from "react-icons/gi";
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

  console.log(likes);
  const handleLikes = () => {
    setLiked(true);
    setLikeCount(likeCount + 1);
    fetch(`https://green-comm-backend.vercel.app/tip/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-green-200 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-green-300 duration-300">
      {/* Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl md:text-2xl font-extrabold text-green-800">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
            <span className="badge bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-full">
              Difficulty: {difficulty}
            </span>
            <span className="badge bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <BiCategory /> {category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="pt-2 flex items-center gap-2 text-gray-600 text-sm">
            <FaUserAlt className="text-green-600" />
            <p className="text-xl font-medium">
              <span className=" font-semibold">By:</span> {userName}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl font-semibold">{likeCount}</p>

            <button 
            disabled={liked}
            onClick={handleLikes}>
              {liked ? <AiFillLike  size={35} /> : <AiOutlineLike size={35} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
