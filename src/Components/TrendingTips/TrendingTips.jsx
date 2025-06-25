import React, { useEffect, useState } from "react";
import TrendingTipCard from "./TrendingTipCard";

const TrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(()=>{
        fetch("https://green-comm-backend.vercel.app/")
        .then(res=>res.json())
        .then(data=>{
            setTips(data.tips);
        })
      },[])
    
  return (
    <section className="my-10 px-4 md:px-16 text-center">
      <h2 className="text-xl md:text-3xl font-bold text-green-900 dark:text-white mb-6">
        Top Trending  Tips
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map(tip => (
          <TrendingTipCard key={tip._id} tip={tip} />
        ))}
      </div>
    </section>
  );
};

export default TrendingTips
