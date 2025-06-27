import React from 'react';

import Hero from '../../Components/Header/Hero';
import GardenerContainer from '../../Components/Gardeners/GardenerContainer';
import Review from '../../Components/Review/Review';
import Benefits from '../../Components/Benefits/Benefits';
import TrendingTips from '../../Components/TrendingTips/TrendingTips';


const Home = () => {
    return (
        <div>      
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