import React, { useEffect, useState } from 'react';
import EventInfo from './EventInfo';
import { Link } from 'react-router';

const HeroSection = () => {
  const eventDate = new Date('2025-01-25T20:00:00'); // Event start date & time
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(eventDate));

  function getTimeRemaining(targetDate) {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(eventDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div>
      {/* Top Banner */}
      <div className=" py-8 w-full bg-gray-600"></div>

      {/* Main Section */}
      <div className="w-11/12 mx-auto min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 relative">

        {/* Left Side Text */}
        <div className="md:w-1/2 space-y-4 pt-10 text-center md:text-left">
          <p className="text-lg sm:text-xl text-yellow-400 tracking-widest">
            Running Club
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
            What we do in life echoes in eternity
          </h2>
          <p className="text-base sm:text-lg md:w-[80%] text-gray-700 mx-auto md:mx-0">
            Instead of viewing training as a chore, reframe it as a privilege and an opportunity 
            to improve your physical and mental health.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-5">
            
             <Link to="/allmarathon">
             <button className="border border-black bg-white text-black px-4 sm:px-6 py-2 text-base sm:text-lg shadow-lg hover:bg-gray-400 transition">
                Explore More
              </button>
             </Link>
           
             <Link to="/blog">
              <button className="bg-black border border-white text-white px-4 sm:px-6 py-2 text-base sm:text-lg shadow-lg hover:bg-gray-600 transition">
                Learn More
              </button>
              </Link>
          </div>
        </div>

        {/* Right Side Image + Event Info */}
        <div className="md:w-1/2 flex justify-center relative mt-6 md:mt-0">
          <img
            src="./b1.png"
            alt="Running"
            className="w-full max-w-3xl object-cover rounded-lg"
          />
          <EventInfo />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
