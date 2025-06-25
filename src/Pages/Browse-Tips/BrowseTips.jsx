import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { FaEye } from "react-icons/fa";

const BrowseTips = () => {
  const publicTips = useLoaderData();
  const [filter, setFilter] = useState();
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
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        🌿 Browse Gardening Tips
      </h1>
      <div>
        <select
          value={filter}
          onChange={handleFilter}
          className="select select-bordered w-full max-w-xs mb-4"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 opacity-95 ">
        <table className="table-auto w-full text-left text-sm">
          <thead className="bg-amber-50 text-green-900">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filterData.map((tip, index) => (
              <tr key={tip._id || index} className="hover:bg-green-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                </td>
                <td className="px-4 py-2 font-semibold text-gray-800">
                  {tip.title}
                </td>
                <td className="px-4 py-2">{tip.category}</td>
                <td className="px-4 py-2">
                  <Link to={`/tip/${tip._id}`}>
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition text-sm">
                      <FaEye /> See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {publicTips.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
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
