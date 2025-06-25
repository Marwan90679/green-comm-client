import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";

const ShareTips = () => {
  const { user } = useContext(AuthContext);
  const displayName = user?.displayName || "Guest";
  const email = user?.email || "Not Available";

  const handleShareTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipsData = Object.fromEntries(formData.entries());

    fetch("https://green-comm-backend.vercel.app/share-tips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("🌿 Tip successfully shared!");
        form.reset();
      });
  };

  return (
    <div className="flex flex-col justify-center sm:min-h-screen p-4 md:py-16 dark:bg-slate-950">
      <div className="max-w-xl w-full mx-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl px-8 py-10">
        <div className="text-center mb-8">
          <img
            src="https://i.ibb.co/Y7hdFPH2/Adobe-Express-file-4.png"
            alt="logo"
            className="w-36 mx-auto"
          />
        </div>

        <form onSubmit={handleShareTips}>
          <div className="space-y-6">
            <h2 className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
              Share a Gardening Tip
            </h2>

            {/* Name (readonly) */}
            <input
              name="userName"
              type="text"
              readOnly
              value={displayName}
              className="bg-green-900 text-white w-full text-sm px-4 py-3 rounded-md cursor-not-allowed"
            />

            {/* Email (readonly) */}
            <input
              name="userEmail"
              type="email"
              readOnly
              value={email}
              className="bg-green-900 text-white w-full text-sm px-4 py-3 rounded-md cursor-not-allowed"
            />

            {/* Title */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Tip Title
              </label>
              <input
                required
                name="title"
                type="text"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="e.g. How I Grow Tomatoes Indoors"
              />
            </div>

            {/* Plant Type */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Plant Type / Topic
              </label>
              <input
                required
                name="plantType"
                type="text"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
                placeholder="e.g. Basil, Indoor Plants, Soil Mixing"
              />
            </div>

            {/* Difficulty */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Difficulty Level
              </label>
              <select
                required
                name="difficulty"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                required
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
                placeholder="Write your gardening tip in detail..."
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Image URL
              </label>
              <input
                required
                name="image"
                type="text"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
                placeholder="Paste image URL"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Category
              </label>
              <select
                required
                name="category"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                <option value="Herbs & Edibles">Herbs & Edibles</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="text-slate-800 dark:text-white text-sm font-medium mb-1 block">
                Availability
              </label>
              <select
                required
                name="availability"
                className="bg-white dark:bg-slate-700 dark:text-white border w-full text-sm px-4 py-3 rounded-md"
              >
                <option value="">Select Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition text-lg font-semibold"
            >
              Submit Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
