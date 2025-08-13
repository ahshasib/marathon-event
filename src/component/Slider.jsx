import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const eventDate = new Date('2025-01-25T20:00:00');
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
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-20 relative py-10">
        
        {/* Left Side Text */}
        <div className="md:w-1/2 space-y-6 mt-4">
          <p className="text-xl text-green-500 tracking-widest">
            Running Club
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            What we do in life echoes in eternity
          </h2>
          <p className="text-lg md:w-[80%] text-gray-700">
            Instead of viewing training as a chore, reframe it as a privilege and an opportunity 
            to improve your physical and mental health.
          </p>
          <div className="flex gap-5">
            <a href="#">
              <button className="border border-black bg-white text-black px-6 py-2 text-lg shadow-lg hover:bg-gray-400 transition">
                Explore More
              </button>
            </a>
            <a href="#">
              <button className="bg-black border border-white text-white px-6 py-2 text-lg shadow-lg hover:bg-gray-600 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Image + Timer */}
        <div className="md:w-1/2 flex flex-col items-center relative mt-6 md:mt-0">
          {/* Image */}
          <img
            src="./b1.png"
            alt="Running"
            className="w-full max-w-lg object-cover rounded-lg"
          />

          {/* Upcoming Event Card */}
          <div className="bg-black bg-opacity-80 text-white p-3 w-full mt-0 border border-white shadow-lg rounded-b-lg">
            <p className="text-sm text-yellow-400 uppercase">Upcoming Event:</p>
            <h3 className="text-2xl font-bold mb-4">Twilight Trail Run</h3>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm">Date</p>
                <p className="text-xl font-bold">Jan 25, 2025</p>
                <p className="text-gray-400">Sunday</p>
              </div>
              <div>
                <p className="text-sm">Start</p>
                <p className="text-xl font-bold">08:00 PM</p>
              </div>
              <div>
                <p className="text-sm">Until</p>
                <p className="text-xl font-bold">Finish</p>
              </div>
            </div>

            {/* Countdown */}
            <div className=" flex justify-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{timeLeft.days}</p>
                <p className="text-xs">Days</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{timeLeft.hours}</p>
                <p className="text-xs">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{timeLeft.minutes}</p>
                <p className="text-xs">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{timeLeft.seconds}</p>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
