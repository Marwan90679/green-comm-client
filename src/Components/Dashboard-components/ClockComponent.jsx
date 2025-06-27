import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { format } from 'date-fns';

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());
  const [size, setSize] = useState(() => window.innerWidth > 1024 ? 150 : 120);

  // Time update effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Responsive size effect
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth > 1024 ? 150 : 120);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Clock 
        size={size} 
        value={time} 
        className="text-gray-800 dark:text-gray-200"
      />
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {format(time, 'PPPP')}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {format(time, 'hh:mm:ss a')}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ClockComponent);