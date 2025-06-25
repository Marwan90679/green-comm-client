import React, { useEffect, useState } from "react";
import TrendingTipCard from "./TrendingTipCard";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://green-comm-backend.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setTips(data.tips || []);
        setLoading(false);
      })
      .catch(() => {
        setTips([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-12 px-4 sm:px-8 md:px-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-green-900 dark:text-green-300 mb-4">
        Top&nbsp;Trending&nbsp;Tips
      </h2>

      {/* Intro paragraph */}
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-400 mb-8">
        Dive into the freshest gardening wisdom from our vibrant community.
        These tips are liked and shared the most—perfect for sparking new ideas
        and greening up your routine!
      </p>

      {loading && (
        <p className="text-center">
          <span className="loading loading-bars md:loading-xl"></span>
        </p>
      )}

      {!loading && tips.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400">
          No trending tips available at the moment.
        </p>
      )}

      {!loading && tips.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <TrendingTipCard key={tip._id} tip={tip} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TrendingTips;
