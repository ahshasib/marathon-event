import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaRoad, FaTag } from 'react-icons/fa';

const MarathonEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/marathon/latest`)
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data.length) return <Loading />;

  return (
    <div className="bg-gray-800 py-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="lightgreen uppercase tracking-widest text-sm font-semibold">
          Don’t Miss Out
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
          Upcoming Marathon Events
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Get ready to challenge yourself and join thousands of runners in these exciting marathon events. 
          Sign up now before the tickets run out!
        </p>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col items-center gap-6">
        {data.map((event, idx) => (
          <Link
            key={idx}
            to={`/marathon/${event._id}`}
            className="w-[95%] lg:w-[70%] flex flex-col lg:flex-row bg-black shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            {/* Left - Image */}
            <div className="w-full lg:w-1/5 h-48 lg:h-60 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle - Info */}
            <div className="w-full lg:w-2/5 px-4 lg:px-6 py-4 flex flex-col justify-center">
              <p className="text-sm lightgreen font-semibold uppercase mb-1 flex items-center gap-2">
                <FaMapMarkerAlt className="lightgreen" /> {event.location}
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-white mb-2">{event.title}</h3>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-2 pt-3">
                <p className="text-gray-300 text-sm md:text-md flex items-center gap-2">
                  <FaTag className="lightgreen" /> Category: General
                </p>
                <p className="text-gray-300 text-sm md:text-md flex items-center gap-2">
                  <FaClock className="lightgreen" /> Time: {new Date(event.regEnd).toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                  })} - 11 AM
                </p>
                <p className="text-gray-300 text-sm md:text-md flex items-center gap-2">
                  <FaRoad className="lightgreen" /> Distance: {event.distance}
                </p>
              </div>
            </div>

            {/* Center - Date Divider */}
            <div className="w-full lg:w-[20%] flex justify-center items-center relative py-4 lg:py-0 ">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 border-l border-dashed border-gray-700"></div>
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 border-l border-dashed border-gray-700"></div>
              <div className="lightgreen font-bold text-lg md:text-xl lg:text-2xl text-center leading-tight">
                {new Date(event.regStart).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                }).toUpperCase()}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="w-full lg:w-1/5 flex items-center justify-center px-4 py-4 lg:py-0 ">
              <button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-green-500 hover:text-white transition">
                Buy Ticket
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarathonEvents;
