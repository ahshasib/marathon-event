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
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl text-white">
      {/* Title Section */}
      <div className="mb-2">
        <p className="text-sm text-yellow-400 uppercase tracking-wide">
          Upcoming Event:
        </p>
        <h3 className="text-2xl font-bold">Twilight Trail Run</h3>
      </div>

      {/* Table Style Section */}
      <div className="grid [grid-template-columns:auto_1fr_auto] border border-white">
        {/* Left Column - Vertical Day */}
        <div className="bg-black bg-opacity-50 border-r border-white flex items-center justify-center px-2 ">
          <p className="text-xl font-bold tracking-widest rotate-[-90deg] uppercase">
            Thursday
          </p>
        </div>

        {/* Middle Column - Date */}
        <div className="bg-black bg-opacity-50 border-r border-white flex flex-col justify-center items-center py-4 px-4">
          <p className="text-xs uppercase text-gray-300">Date</p>
          <p className="text-3xl font-extrabold">Dec 25, 2025</p>
        </div>

        {/* Right Column - Start & Until */}
        <div className="bg-black bg-opacity-50 grid grid-rows-2">
          <div className="border-b border-white flex flex-col justify-center items-center py-2 px-8">
            <p className="text-xs uppercase text-gray-300">Start</p>
            <p className="font-bold">08:00 PM</p>
          </div>
          <div className="flex flex-col justify-center items-center py-2 px-3">
            <p className="text-xs uppercase text-gray-300">Until</p>
            <p className="font-bold">Finish</p>
          </div>
        </div>
      </div>

      {/* Countdown Section with animation */}
      <div className="mt-2 flex justify-center gap-6">
        {labels.map((label, idx) => (
          <div key={label} className="text-center w-16">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={values[idx]} // re-render when value changes
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-bold text-yellow-400"
              >
                {values[idx]}
              </motion.p>
            </AnimatePresence>
            <p className="text-xs uppercase">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;
