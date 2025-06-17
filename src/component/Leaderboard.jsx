import React from 'react';

const Leaderboard = () => {
  const dummyData = [
    { id: 1, name: 'Hasibul Islam', city: 'Dhaka', totalMarathons: 5, bestTime: '2h 15m' },
    { id: 2, name: 'Sabbir Hossain', city: 'Sylhet', totalMarathons: 4, bestTime: '2h 30m' },
    { id: 3, name: 'Nusrat Jahan', city: 'Rajshahi', totalMarathons: 3, bestTime: '2h 40m' },
    { id: 4, name: 'Mahmud Hasan', city: 'Chattogram', totalMarathons: 2, bestTime: '3h 00m' },
  ];

  return (
    <div>
    <div
      className="hero min-h-fit mt-15"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center py-10 px-5">
        <div className="w-full max-w-5xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
          <p className="text-white font-semibold py-5 w-full md:w-[80%] mx-auto text-sm md:text-base">
            MeetMatic is a modern event discovery platform designed to connect
            people with exciting local experiences. From tech conferences and
            workshops to concerts and art exhibitions, MeetMatic makes it
            easy to explore what’s happening around you. With a user-friendly
            interface, you can search events, save your favorites, and even
            leave reviews after attending. Let MeetMatic help you turn every
            moment into a memorable one!
          </p>

          {/* Stats section */}
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
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
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
                data-tooltip-id={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-green-200"
              />
              <Tooltip id={member.name} place="top" type="dark" effect="solid" >{member.name}</Tooltip>
              <h3 className="mt-4 text-lg font-semibold text-green-700">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.city}</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2">
              bestTime:{member.bestTime}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
          {/* Button */}
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Leaderboard;
