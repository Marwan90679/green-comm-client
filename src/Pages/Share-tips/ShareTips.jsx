import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";

const ShareTips = () => {
  const {user}=use(AuthContext);
  const{displayName,email}=user;
  console.log(user)
  const handleShareTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipsData = Object.fromEntries(formData.entries());
    fetch("https://green-comm-backend.vercel.app/share-tips", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Tips successfully shared");
      });
  };

  return (
    <div className="flex flex-col justify-center sm:h-screen p-4 md:my-50">
      <div className="max-w-xl w-full mx-auto border border-slate-300 rounded-2xl px-8">
        <div className="text-center mb-12">
          <img
            src="https://i.ibb.co/Y7hdFPH2/Adobe-Express-file-4.png"
            alt="logo"
            className="w-40 mx-auto"
          />
        </div>

        <form onSubmit={handleShareTips}>
          <div className="space-y-6">
            <h2 className="text-slate-900 text-center text-3xl font-semibold">
            Share a Garden Tips
            </h2>
            <div>
              <input
                name="userName"
                type="text"
                readOnly
                value={displayName}
                className="bg-green-900 text-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md cursor-not-allowed"
              />
            </div>

            <div>
              <input
                name="userEmail"
                type="email"
                readOnly
                value={email}
                className="bg-green-900 text-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md cursor-not-allowed "
              />
            </div>
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Title
              </label>
              <input
                required
                name="title"
                type="text"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="How I Grow Tomatoes Indoors"
              />
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Plant Type / Topic
              </label>
              <input
                required
                name="plantType"
                type="text"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter plant type or topic"
              />
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Difficulty Level
              </label>
              <select
                required
                name="difficulty"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Write your gardening tip in detail..."
              ></textarea>
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Images URL
              </label>
              <input
                required
                name="image"
                type="text"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Paste image URL here"
              />
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Category
              </label>
              <select
                required
                name="category"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">
                Availability
              </label>
              <select
                required
                name="availability"
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              >
                <option value="">Select Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </div>
          </div>

          <div className="mt-12 md:pb-10 pb-5">
            <button
              type="submit"
              className="w-full py-3 px-4 tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700  text-xl font-semibold  cursor-pointer"
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
