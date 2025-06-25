import React from "react";

const Benefits = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-16 rounded-t-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 dark:text-green-300 mb-6">
          Why Gardening Is Good for You
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-10 px-2">
          Gardening isn't just about growing plants — it's about growing joy,
          peace, and better health. Here’s how getting your hands in the soil
          can change your life.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {[
            ["🌱 Reduces Stress", "Spending time with plants and soil calms your mind and helps reduce anxiety and depression."],
            ["💪 Improves Physical Health", "Gardening involves movement, lifting, digging, and stretching — all great for your body."],
            ["🍅 Encourages Healthy Eating", "Growing your own fruits and vegetables makes you more likely to eat fresh, organic produce."],
            ["🌍 Boosts Connection with Nature", "Tending to plants makes you more aware of natural cycles, seasons, and the environment."],
            ["👨‍👩‍👧‍👦 Builds Community", "Whether it’s a shared garden or a few pots on a balcony, gardening brings people together."],
            ["🧠 Enhances Mental Focus", "Caring for plants improves your focus, patience, and sense of accomplishment."],
          ].map(([title, desc], idx) => (
            <div key={idx}>
              <h3 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Impact Section */}
      <div className="text-center mt-16">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold dark:text-green-300 mb-6">
          🌱 Global Gardening Impact
        </h3>
      </div>

      <div className="px-4 sm:px-6 py-8 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-md border dark:border-white">
          {[
            ["120", "B$+", "Global Market"],
            ["18.3", "M", "New Gardeners"],
            ["5.92", "%", "Growth in Home Gardening"],
            ["70", "B$+", "Ornamental Plant Market"],
          ].map(([number, suffix, label], idx) => (
            <div key={idx}>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-green-300">
                {number}
                <span className="text-green-700 dark:text-emerald-400">{suffix}</span>
              </h3>
              <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2 text-sm sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
