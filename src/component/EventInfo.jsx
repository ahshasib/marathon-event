import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const EventInfo = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-25T20:00:00");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  const values = [
    timeLeft.days ?? 0,
    timeLeft.hours ?? 0,
    timeLeft.minutes ?? 0,
    timeLeft.seconds ?? 0,
  ];

  return (
    <div className="
     bsolute -top-20 right-0 w-full max-w-lg text-white p-4
    ">
      {/* Title Section */}
      <div className="mb-2 ">
        <p className="text-[10px] sm:text-xs lg:text-sm text-yellow-400 uppercase tracking-wide">
          Upcoming Event:
        </p>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
          Twilight Trail Run
        </h3>
      </div>

      {/* Table Section */}
      <div className="grid [grid-template-columns:auto_1fr_auto] border border-white text-[9px] sm:text-xs lg:text-base w-full">
        {/* Left Column */}
        <div className="bg-black bg-opacity-50 border-r border-white flex items-center justify-center px-1 sm:px-2 lg:px-2">
          <p className="text-xs sm:text-sm lg:text-lg font-bold tracking-widest rotate-[-90deg] uppercase">
            Thursday
          </p>
        </div>

        {/* Middle Column */}
        <div className="bg-black bg-opacity-50 border-r border-white flex flex-col justify-center items-center py-1 sm:py-2 lg:py-4 px-1 sm:px-4">
          <p className="uppercase text-gray-300 text-[7px] sm:text-xs lg:text-sm">Date</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold">Dec 25, 2025</p>
        </div>

        {/* Right Column */}
        <div className="bg-black bg-opacity-50 grid grid-rows-2">
          <div className="border-b border-white flex flex-col justify-center items-center py-1 sm:py-2 px-1 sm:px-4">
            <p className="uppercase text-gray-300 text-[7px] sm:text-xs lg:text-sm">Start</p>
            <p className="font-bold text-sm sm:text-base lg:text-lg">08:00 PM</p>
          </div>
          <div className="flex flex-col justify-center items-center py-1 sm:py-2 px-1 sm:px-4">
            <p className="uppercase text-gray-300 text-[7px] sm:text-xs lg:text-sm">Until</p>
            <p className="font-bold text-sm sm:text-base lg:text-lg">Finish</p>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="mt-2 flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 w-full">
        {labels.map((label, idx) => (
          <div key={label} className="text-center w-12 sm:w-14 lg:w-16">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={values[idx]}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-yellow-400"
              >
                {values[idx]}
              </motion.p>
            </AnimatePresence>
            <p className="text-[6px] sm:text-xs lg:text-xs uppercase">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
