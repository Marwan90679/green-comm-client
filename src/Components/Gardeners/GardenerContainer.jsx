import React, { useEffect, useState } from 'react';
import GardenerCard from './GardenerCard';

const GardenerContainer = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch('https://green-comm-backend.vercel.app/')
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data.gardener || []);
      });
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 text-center mb-10">
        Meet Our Active Gardeners
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
        Explore gardeners who are passionate about cultivating nature and sharing their green wisdom with the community.
      </p>

      {gardeners.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading gardeners...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardeners.map((gardener, idx) => (
            <GardenerCard key={idx} gardener={gardener} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GardenerContainer;
