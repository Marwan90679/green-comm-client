import React, { useEffect, useState } from 'react';
import GardenerCard from './GardenerCard';


const GardenerContainer = () => {
  const [gardeners, setGardeners] = useState([]);
  useEffect(()=>{
    fetch("https://green-comm-backend.vercel.app/")
    .then(res=>res.json())
    .then(data=>{
      setGardeners(data.gardener);
    })
  },[])
 
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8  dark:text-white">
        Meet Our Active Gardeners
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gardeners.map((gardener, idx) => (
          <GardenerCard key={idx} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default GardenerContainer;
