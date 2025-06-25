import React from "react";
import GardenerCard from "./GardenerCard";
import { useLoaderData } from "react-router";
// import gardeners from "../../data/gardeners.json"; // if using local JSON

const ExploreGardeners = () => {
const gardeners=useLoaderData();



  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        🔍 Explore Gardeners
      </h2>

      <div className="grid gap-6 px-4 md:px-10 md:grid-cols-2 lg:grid-cols-3">
        {gardeners.length > 0 ? (
          gardeners.map((gardener) => (
            <GardenerCard key={gardener._id} gardener={gardener} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ExploreGardeners;
