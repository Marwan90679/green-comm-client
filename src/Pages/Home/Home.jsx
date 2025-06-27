import React from 'react';

import Hero from '../../Components/Header/Hero';
import GardenerContainer from '../../Components/Gardeners/GardenerContainer';
import Review from '../../Components/Review/Review';
import Benefits from '../../Components/Benefits/Benefits';
import TrendingTips from '../../Components/TrendingTips/TrendingTips';


const Home = () => {
    return (
        <div>
          <div className='text-center bg-white dark:bg-slate-950'>
          <p className=" mt-4 text-sm sm:text-base md:text-lg text-shadow-amber-400 text-orange-700 font-bold shadow-xl  max-w-xl mx-auto">
          Most of the vectors were sourced from <span className='text-blue-700'>FREEPIK</span>
          </p>
          </div>
            <div className='md:w-9/12 mx-auto '>
            <Hero></Hero>
            <TrendingTips></TrendingTips>
            <GardenerContainer></GardenerContainer>          
            <Review></Review>
            <Benefits></Benefits>
        </div>
        </div>
    );
};

export default Home;