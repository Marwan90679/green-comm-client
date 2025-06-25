import React, { useContext, useEffect, useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import UpdateTips from "../../Components/UpdateTips/UpdateTips";
import Loading from "../Loading"; // adjust import path if needed

const MyTips = () => {
  const { user, loading } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [selectedTipsId, setSelectedTipsId] = useState(null);
  const [tipData, setTipData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // Fetch tips on user email change
  useEffect(() => {
    if (user?.email) {
      setIsFetching(true);
      fetch(`https://green-comm-backend.vercel.app/my-tips/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTips(data || []);
          setIsFetching(false);
        })
        .catch(() => {
          setTips([]);
          setIsFetching(false);
        });
    }
  }, [user]);

  const handleModal = (id) => {
    fetch(`https://green-comm-backend.vercel.app/my-tips/${user.email}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTipData(data);
        setSelectedTipsId(id);
        // Open modal, make sure modal element exists and supports showModal
        const modal = document.getElementById("my_modal_1");
        if (modal?.showModal) {
          modal.showModal();
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tip will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://green-comm-backend.vercel.app/my-tips/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Tip deleted successfully");
            // Re-fetch updated tips list
            fetch(`https://green-comm-backend.vercel.app/my-tips/${user.email}`)
              .then((res) => res.json())
              .then((data) => setTips(data || []));
          });
      }
    });
  };

  if (loading || isFetching) return <Loading />;

  return (
    <div className="text-center px-4 md:px-0">
      {tips?.length > 0 ? (
        <>
          <h3 className="text-xl md:mt-8 md:mb-12 md:font-bold md:text-5xl font-medium">
            My Tips
          </h3>
          <div className="w-full overflow-x-auto md:w-3/4 mx-auto md:bg-green-50 dark:md:bg-gray-800 md:rounded-lg">
            <table className="table table-zebra w-full dark:text-gray-200">
              <thead className="bg-amber-50 dark:bg-amber-700 text-green-900 dark:text-green-300">
                <tr>
                  <th>Title</th>
                  <th>Plant Type</th>
                  <th>Difficulty</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tips.map((tip) => (
                  <tr key={tip._id} className="hover:bg-green-50 dark:hover:bg-gray-700">
                    <td>
                      <div className="flex items-center gap-3 min-w-[200px]">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={tip.image} alt={tip.title} />
                          </div>
                        </div>
                        <p className="font-bold text-sm md:text-base">{tip.title}</p>
                      </div>
                    </td>
                    <td className="text-sm">{tip.plantType}</td>
                    <td>
                      <span className="badge badge-success badge-sm">{tip.difficulty}</span>
                    </td>
                    <td className="text-sm">{tip.category}</td>
                    <td>
                      <span className="badge badge-outline badge-sm">{tip.availability}</span>
                    </td>
                    <td>
                      <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                        <button
                          onClick={() => handleModal(tip._id)}
                          className="btn btn-xs md:text-xl md:p-3 md:py-5"
                          aria-label={`Edit tip titled ${tip.title}`}
                        >
                          <MdEditSquare />
                        </button>
                        <button
                          onClick={() => handleDelete(tip._id)}
                          className="btn btn-xs text-lg md:text-2xl md:p-3 md:py-5 text-red-600 hover:text-red-800"
                          aria-label={`Delete tip titled ${tip.title}`}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="flex flex-col space-y-20 md:space-y-25 my-12">
          <h3 className="text-2xl md:text-6xl font-bold dark:text-gray-100">
            You haven't shared any tips yet
          </h3>
          <button className="bg-green-700 hover:bg-green-800 px-8 py-5 rounded-2xl text-white font-medium md:font-bold md:w-1/4 mx-auto md:text-2xl">
            <Link to="/share-tips" className="block w-full h-full">
              Share a garden tip now
            </Link>
          </button>
        </div>
      )}

      <UpdateTips
        tipData={tipData}
        selectedTipsId={selectedTipsId}
        user={user}
        refetchTips={() =>
          fetch(`https://green-comm-backend.vercel.app/my-tips/${user.email}`)
            .then((res) => res.json())
            .then((data) => setTips(data || []))
        }
      />
    </div>
  );
};

export default MyTips;
