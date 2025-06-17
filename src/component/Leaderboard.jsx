import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Tooltip } from 'react-tooltip';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'react-tooltip/dist/react-tooltip.css';

const Leaderboard = () => {
  const dummyData = [
    {
      id: 1,
      name: 'Hasibul Islam',
      city: 'Dhaka',
      totalMarathons: 5,
      bestTime: '2h 15m',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Sabbir Hossain',
      city: 'Sylhet',
      totalMarathons: 4,
      bestTime: '2h 30m',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Nusrat Jahan',
      city: 'Rajshahi',
      totalMarathons: 3,
      bestTime: '2h 40m',
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'Mahmud Hasan',
      city: 'Chattogram',
      totalMarathons: 2,
      bestTime: '3h 00m',
      image: 'https://i.pravatar.cc/150?img=4'
    }
  ];

  return (
    <div
      className="hero min-h-fit mt-16"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center py-10 px-5">
        <div className="w-full max-w-5xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">Top Marathon Performers</h1>
          <p className="text-white font-semibold py-5 w-full md:w-[80%] mx-auto text-sm md:text-base">
            Discover the champions who’ve run the extra mile! Our leaderboard highlights the top-performing athletes from different cities based on their number of marathons and best run times.
          </p>

          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            modules={[FreeMode, Autoplay]}
            className="px-2"
          >
            {dummyData.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    data-tooltip-id={`tooltip-${member.id}`}
                    data-tooltip-content={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-green-200"
                  />
                  <Tooltip id={`tooltip-${member.id}`} place="top" />
                  <h3 className="mt-4 text-lg font-semibold text-green-700">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.city}</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2">
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
