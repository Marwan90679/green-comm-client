import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const publicTips = useLoaderData();
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterData = Array.isArray(publicTips)
    ? filter
      ? publicTips.filter((tip) => tip.difficulty === filter)
      : publicTips
    : [];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-green-700 dark:text-green-400">
        🌿 Browse Gardening Tips
      </h1>

      <p className="max-w-3xl mx-auto mb-8 text-center text-gray-700 dark:text-gray-300">
        Explore a curated collection of gardening tips tailored to every skill
        level. Use the filter to find tips that match your gardening experience
        and help your green thumb grow!
      </p>

      <div>
        <select
          value={filter}
          onChange={handleFilter}
          className="select select-bordered w-full max-w-xs mb-6
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-green-500
            rounded-md
            transition"
          aria-label="Filter gardening tips by difficulty"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 opacity-95">
        <table className="table-auto w-full text-left text-sm dark:text-gray-300">
          <thead className="bg-amber-50 dark:bg-amber-900 text-green-900 dark:text-green-300">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {filterData.length > 0 ? (
              filterData.map((tip, index) => (
                <tr
                  key={tip._id || index}
                  className="hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-16 h-16 object-cover rounded-md border border-gray-300 dark:border-gray-600"
                      loading="lazy"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold text-gray-800 dark:text-gray-100">
                    {tip.title}
                  </td>
                  <td className="px-4 py-2">{tip.category}</td>
                  <td className="px-4 py-2">
                    <Link to={`/tip/${tip._id}`}>
                      <button
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 
                        text-white px-4 py-2 rounded-md transition text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        <FaEye /> See More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No public tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
