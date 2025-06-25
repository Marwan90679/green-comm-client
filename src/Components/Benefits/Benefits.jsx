import React from "react";

const Benefits = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16 mx-4 rounded-t-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6">
          Why Gardening Is Good for You
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-10">
          Gardening isn't just about growing plants — it's about growing joy,
          peace, and better health. Here’s how getting your hands in the soil
          can change your life.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              🌱 Reduces Stress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Spending time with plants and soil calms your mind and helps
              reduce anxiety and depression.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              💪 Improves Physical Health
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gardening involves movement, lifting, digging, and stretching —
              all great for your body.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              🍅 Encourages Healthy Eating
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Growing your own fruits and vegetables makes you more likely to
              eat fresh, organic produce.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              🌍 Boosts Connection with Nature
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tending to plants makes you more aware of natural cycles, seasons,
              and the environment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              👨‍👩‍👧‍👦 Builds Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Whether it’s a shared garden or a few pots on a balcony,
              gardening brings people together.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              🧠 Enhances Mental Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Caring for plants improves your focus, patience, and sense of
              accomplishment.
            </p>
          </div>
        </div>
      </div>

      {/* Global Impact Section */}
      <div className="text-center mt-16">
        <h3 className="text-xl md:text-4xl font-extrabold dark:text-green-300 mb-4">
          🌱 Global Gardening Impact
        </h3>
      </div>

      <div className=" rounded-xl  px-6 sm:px-12 py-10 flex justify-center">
        <div className="border dark:border-white w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 text-center bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-green-300">
              120<span className="text-green-700 dark:text-emerald-400">B$+</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2">
              Global Market
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-green-300">
              18.3<span className="text-green-700 dark:text-emerald-400">M</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2">
              New Gardeners
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-green-300">
              5.92<span className="text-green-700 dark:text-emerald-400">%</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2">
              Growth in Home Gardening
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-green-300">
              70<span className="text-green-700 dark:text-emerald-400">B$+</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2">
              Ornamental Plant Market
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
