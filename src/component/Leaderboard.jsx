import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Tooltip } from 'react-tooltip';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'react-tooltip/dist/react-tooltip.css';

const Leaderboard = () => {
  const dummyData = [
    { id: 1, name: 'Hasibul Islam', city: 'Dhaka', bestTime: '2h 15m', image: './runner2.jpeg' },
    { id: 2, name: 'Sabbir Hossain', city: 'Sylhet', bestTime: '2h 30m', image: './runner3.jpeg' },
    { id: 3, name: 'Nusrat Jahan', city: 'Rajshahi', bestTime: '2h 40m', image: 'runner1.jpg' },
    { id: 4, name: 'Mahmud Hasan', city: 'Chattogram', bestTime: '3h 00m', image: 'https://i.pravatar.cc/150?img=3' },
    { id: 5, name: 'Rahima Khatun', city: 'Barisal', bestTime: '2h 55m', image: 'runner1.jpg' },
    { id: 6, name: 'Abir Ahmed', city: 'Khulna', bestTime: '2h 45m', image: 'https://i.pravatar.cc/150?img=7' }
  ];

  return (
    <div
      className="hero mt-16 min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url(run.jpg)" }}
    >
      <div className="hero-overlay bg-black bg-opacity-60" />
      <div className="hero-content text-neutral-content text-center py-10 px-3 sm:px-6 md:px-10 lg:px-14 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Top Marathon Performers
          </h1>
          <p className="text-white font-medium text-sm md:text-base mb-8 max-w-2xl md:max-w-6xl mx-auto">
            Discover the champions who’ve run the extra mile! Our leaderboard highlights the top-performing athletes from different cities based on their number of marathons and best run times.
          </p>

          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              360: { slidesPerView: 1.3 },
              480: { slidesPerView: 1.6 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            loop={true}
            modules={[FreeMode, Autoplay]}
            className="px-1 sm:px-3"
          >
            {dummyData.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white shadow-lg rounded-xl mt-4 p-4 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300 min-h-[250px] sm:min-h-[270px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <Tooltip id={`tooltip-${index}`} place="top" />
                  <h3 className="mt-3 text-base sm:text-lg font-semibold">{member.name}</h3>
                  <p className="text-xs sm:text-sm">{member.city}</p>
                  <span className="text-[10px] sm:text-xs bg-white text-green-800 px-2 py-1 rounded-full mt-2 shadow-sm">
                    Best Time: {member.bestTime}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
