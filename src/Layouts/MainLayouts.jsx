import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    return (
        <div className='  min-h-screen flex flex-col bg-white dark:bg-gray-950 dark:text-white'>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-450px)]">
           <Outlet></Outlet>
           <ToastContainer />
           </div>
           <Footer></Footer>
          
        </div>
    );
};

export default MainLayouts;






