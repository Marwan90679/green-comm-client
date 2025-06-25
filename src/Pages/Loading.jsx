import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center min-h-screen items-center dark:bg-neutral-950'>
            <title>Loading ....</title>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loading;