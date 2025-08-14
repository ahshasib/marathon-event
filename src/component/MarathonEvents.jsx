import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const MarathonEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/marathon/latest`)
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data.length) return <Loading />;

  return (
    <div className=' py-20'>
      <div className='text-center'>
        <p className='text-xl lightgreen py-3'>You have to Check</p>
        <h2 className='text-4xl md:text-6xl '>All Marathon Events</h2>
        <p className='text-sm w-[80%] mx-auto pt-2'>Discover upcoming marathons, join the community, and take your running journey to the next level!</p>
      </div>

      <div className="w-[80%] mx-auto px-4 py-12 flex flex-col lg:flex-row items-stretch gap-8 ">



        {/* Left Side: Dynamic Ad Section */}
        <div className="w-full relative lg:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl flex flex-col justify-center overflow-hidden">
          {/* Video fills the entire container */}
          <video
            src="/ad1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute bottom-0 w-full text-center bg-black/50 p-4">
            <h2 className="text-2xl font-bold mb-2">Special Marathon Offer</h2>
            <p className="mb-4 text-sm">
              Join now and get exclusive benefits, training guides, and merchandise discounts!
            </p>
            <button className="bg-yellow-400 text-black font-semibold py-2 px-4  hover:bg-yellow-300 transition">
              Learn More
            </button>
          </div>
        </div>


        {/* Right Side: Cards grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((event, idx) => (
            <Link
              key={idx}
              to={`/marathon/${event._id}`}
              className="relative group block h-[50vh] overflow-hidden shadow-2xl rounded-none"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-white font-extrabold text-xl md:text-2xl leading-tight">
                  {event.title.toUpperCase()}
                </h3>
                <p className="text-gray-200 mt-2 text-sm md:text-base line-clamp-3">
                  {event.description}
                </p>
                <button className="mt-4 bg-black text-white font-semibold px-5 py-2 inline-block w-max">
                  JOIN NOW!
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarathonEvents;
