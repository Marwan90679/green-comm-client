import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
      navigate("/");
    };
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          className="md:size-[400px] size-[350px]"
          src="https://i.ibb.co/KpxYHqvx/404-error-with-a-landscape-rafiki.png"
          alt=""
        />
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#141414] mt-4">No Page Found</p>
        <button
          onClick={handlePageChange}
          className="bg-[#236b43] mt-6 font-semibold rounded-full px-6 py-2.5 text-white"
        >
          Go To Home Page
        </button>
      </div>
        </div>
    );
};

export default Error;