import React from "react";
import Swal from "sweetalert2";

const UpdateTips = ({ user, tipData, selectedTipsId ,refetchTips}) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    document.getElementById("my_modal_1").close();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      fetch(`https://green-comm-backend.vercel.app/tip/${selectedTipsId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
              refetchTips();
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          }
        });
    });
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box w-[95%] sm:w-full max-w-lg max-h-screen overflow-y-auto rounded-2xl p-0">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 px-4 py-3 md:px-6 md:py-4 rounded-t-2xl">
              <h2 className="text-base md:text-lg font-semibold text-white ">
                Update Your Tips
              </h2>
            </div>

            {/* User Info */}
            <div className="p-4 md:p-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Email:</p>
                  <p className="text-gray-900 text-sm font-medium mt-1">
                    {user?.email}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">User Name</p>
                  <p className="text-gray-900 text-sm font-medium mt-1">
                    {user?.displayName}
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleUpdate} className="space-y-4 mt-6">
                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Title
                  </label>
                  <input
                    defaultValue={tipData?.title}
                    type="text"
                    name="title"
                    placeholder="How I Grow Tomatoes Indoors"
                    className="input input-bordered w-full mt-1"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Plant Type / Topic
                  </label>
                  <input
                    type="text"
                    name="topic"
                    placeholder="e.g., Tomato, Herbs, Indoor plants"
                    className="input input-bordered w-full mt-1"
                    defaultValue={tipData?.plantType}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Difficulty Level
                  </label>
                  <select
                    name="difficulty"
                    defaultValue={tipData?.difficulty}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Description
                  </label>
                  <textarea
                    defaultValue={tipData?.description}
                    name="description"
                    placeholder="Write your gardening tip in detail..."
                    className="textarea textarea-bordered w-full mt-1"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Images URL
                  </label>
                  <input
                    defaultValue={tipData?.image}
                    type="text"
                    name="image"
                    placeholder="Paste image URL here"
                    className="input input-bordered w-full mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Category
                  </label>
                  <select
                    defaultValue={tipData?.category}
                    name="category"
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="Composting">Composting</option>
                    <option value="Plant Care">Plant Care</option>
                    <option value="Vertical Gardening">
                      Vertical Gardening
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-medium">
                    Availability
                  </label>
                  <select
                    defaultValue={tipData?.availability}
                    name="availability"
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="Public">Public</option>
                    <option value="Hidden">Hidden</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4">
                  <button
                    type="button"
                    className="btn w-full sm:w-auto"
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                  >
                    Cancel
                  </button>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn w-full sm:w-auto"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateTips;
