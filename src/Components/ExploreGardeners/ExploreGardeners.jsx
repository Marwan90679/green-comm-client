import React from "react";
import GardenerCard from "./GardenerCard";
import { useLoaderData } from "react-router";
// import gardeners from "../../data/gardeners.json"; // if using local JSON

const ExploreGardeners = () => {
  const gardeners = useLoaderData();

  return (
    <section className="py-10  min-h-screen dark:bg-neutral-950">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-yellow-50 text-green-700">
        🔍 Explore Gardeners
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 text-base max-w-2xl mx-auto mb-6">
        Discover active gardeners who are passionate about nurturing plants and
        sharing their knowledge. Whether you're new to gardening or looking for
        expert tips, our community is here to help!
      </p>

      <div className="grid gap-6 lg:w-10/12 mx-auto px-4 md:px-10 md:grid-cols-2 lg:grid-cols-4">
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
