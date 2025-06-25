import React from "react";

const Benefits = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16 mx-4 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Why Gardening Is Good for You
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Gardening isn't just about growing plants — it's about growing joy,
          peace, and better health. Here’s how getting your hands in the soil
          can change your life.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🌱 Reduces Stress
            </h3>
            <p className="text-gray-600">
              Spending time with plants and soil calms your mind and helps
              reduce anxiety and depression.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              💪 Improves Physical Health
            </h3>
            <p className="text-gray-600">
              Gardening involves movement, lifting, digging, and stretching —
              all great for your body.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🍅 Encourages Healthy Eating
            </h3>
            <p className="text-gray-600">
              Growing your own fruits and vegetables makes you more likely to
              eat fresh, organic produce.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🌍 Boosts Connection with Nature
            </h3>
            <p className="text-gray-600">
              Tending to plants makes you more aware of natural cycles, seasons,
              and the environment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              👨‍👩‍👧‍👦 Builds Community
            </h3>
            <p className="text-gray-600">
              Whether it’s a shared garden or a few pots on a balcony, gardening
              brings people together.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🧠 Enhances Mental Focus
            </h3>
            <p className="text-gray-600">
              Caring for plants improves your focus, patience, and sense of
              accomplishment.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="md:text-4xl text-xl md:font-extrabold mt-5 dark:text-green-800">
          🌱 Global Gardening Impact –:
        </h3>
      </div>
      <div className="bg-green-50 p-8 backdrop-opacity-95 flex items-center justify-center">
        <div className="bg-green-50 [box-shadow:0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
          <div className="text-center">
            <h3 className="text-slate-900 text-4xl font-extrabold">
            120<span className="text-green-700">B$+</span>
            </h3>
            <p className="text-slate-500 text-base font-semibold mt-3">
            Global Market
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-slate-900 text-4xl font-extrabold">
            18.3<span className="text-green-700">M</span>
            </h3>
            <p className="text-slate-500 text-base font-semibold mt-3">
            New Gardeners
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-slate-900 text-4xl font-extrabold">
            5.92<span className="text-green-700">%</span>
            </h3>
            <p className="text-slate-500 text-base font-semibold mt-3">
            Growth in Home Gardening
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-slate-900 text-4xl font-extrabold">
            70<span className="text-green-700">B$+</span>
            </h3>
            <p className="text-slate-500 text-base font-semibold mt-3">
            Ornamental Plant Market
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
