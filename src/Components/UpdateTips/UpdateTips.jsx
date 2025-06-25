import React from "react";
import Swal from "sweetalert2";

const UpdateTips = ({ user, tipData, selectedTipsId, refetchTips }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    updateData.plantType = updateData.topic || ""; // fix for naming mismatch
    delete updateData.topic;

    document.getElementById("my_modal_1").close();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://green-comm-backend.vercel.app/tip/${selectedTipsId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Saved!", "", "success");
              refetchTips();
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-[95%] sm:w-full max-w-lg max-h-screen overflow-y-auto rounded-2xl p-0">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 px-4 py-3 md:px-6 md:py-4 rounded-t-2xl">
              <h2 className="text-base md:text-lg font-semibold text-white">
                Update Your Tip
              </h2>
            </div>

            {/* User Info */}
            <div className="p-4 md:p-6 space-y-1">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">Email:</p>
                  <p className="text-gray-900 dark:text-white text-sm font-medium mt-1">
                    {user?.email}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">User Name:</p>
                  <p className="text-gray-900 dark:text-white text-sm font-medium mt-1">
                    {user?.displayName}
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleUpdate} className="space-y-5 mt-6 dark:text-black">
                <div>
                  <label className="label-text">Title</label>
                  <input
                    name="title"
                    defaultValue={tipData?.title}
                    type="text"
                    placeholder="Tip Title"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label-text">Plant Type / Topic</label>
                  <input
                    name="topic"
                    defaultValue={tipData?.plantType}
                    type="text"
                    placeholder="e.g., Tomatoes, Indoor Plants"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label-text">Difficulty Level</label>
                  <select
                    name="difficulty"
                    defaultValue={tipData?.difficulty}
                    className="select select-bordered w-full"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="label-text">Description</label>
                  <textarea
                    name="description"
                    defaultValue={tipData?.description}
                    rows="4"
                    className="textarea textarea-bordered w-full"
                    placeholder="Write your gardening tip..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="label-text">Image URL</label>
                  <input
                    name="image"
                    defaultValue={tipData?.image}
                    type="text"
                    placeholder="Paste image URL"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label-text">Category</label>
                  <select
                    name="category"
                    defaultValue={tipData?.category}
                    className="select select-bordered w-full"
                  >
                    <option value="Composting">Composting</option>
                    <option value="Plant Care">Plant Care</option>
                    <option value="Vertical Gardening">Vertical Gardening</option>
                  </select>
                </div>

                <div>
                  <label className="label-text">Availability</label>
                  <select
                    name="availability"
                    defaultValue={tipData?.availability}
                    className="select select-bordered w-full"
                  >
                    <option value="Public">Public</option>
                    <option value="Hidden">Hidden</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => document.getElementById("my_modal_1").close()}
                    className="btn btn-outline w-full sm:w-auto dark:text-white hover:bg-neutral-500"
                  >
                    Cancel
                  </button>
                  <input type="submit" value="Submit" className="btn btn-success w-full sm:w-auto" />
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
