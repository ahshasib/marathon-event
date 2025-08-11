import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "John Doe",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment: "Amazing marathon! Well organized and super fun.The volunteers were so helpful and kind!.This was my first marathon and I enjoyed every moment.Perfect weather, great route, and awesome vibes.Loved the energy and the crowd was fantastic!.Amazing marathon! Well organized and super fun."
  },
  {
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment: "Loved the energy and the crowd was fantastic!.The volunteers were so helpful and kind!.This was my first marathon and I enjoyed every moment.Perfect weather, great route, and awesome vibes.Loved the energy and the crowd was fantastic!.Amazing marathon! Well organized and super fun."
  },
  {
    name: "Mike Smith",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    comment: "Perfect weather, great route, and awesome vibes.The volunteers were so helpful and kind!.This was my first marathon and I enjoyed every moment.Perfect weather, great route, and awesome vibes.Loved the energy and the crowd was fantastic!.Amazing marathon! Well organized and super fun."
  },
  {
    name: "Emily Clark",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    comment: "This was my first marathon and I enjoyed every moment.The volunteers were so helpful and kind!.This was my first marathon and I enjoyed every moment.Perfect weather, great route, and awesome vibes.Loved the energy and the crowd was fantastic!.Amazing marathon! Well organized and super fun."
  },
  {
    name: "David Kim",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    comment: "The volunteers were so helpful and kind!.This was my first marathon and I enjoyed every moment.Perfect weather, great route, and awesome vibes.Loved the energy and the crowd was fantastic!.Amazing marathon! Well organized and super fun."
  }
];

const ReviewSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getStars = (count) => {
    return "⭐".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <div className="relative w-full flex justify-center px-4 mt-20">
      {/* Review container */}
      <div
        className="absolute -top-36 md:-top-28 shadow-xl w-[95%] md:w-[70%] px-16 flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0 py-10"
        style={{
          backgroundColor: "#E8FF02",
        }}
      >
        {/* Left Side (fixed text) */}
        <div className="md:w-1/2 w-full py-5 text-left border-b md:border-b-0 md:border-r border-gray-300 pr-4 flex flex-col items-start justify-center">
          {/* Double Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-500 mb-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A5.004 5.004 0 0 0 2 11v7h7v-7H6.83A3.001 3.001 0 0 1 9 8.17V6H7.17zM17.17 6A5.004 5.004 0 0 0 12 11v7h7v-7h-2.17A3.001 3.001 0 0 1 19 8.17V6h-1.83z" />
          </svg>

          {/* Heading */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
            Add your best review
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-lg mt-2 max-w-[250px] md:max-w-[350px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
          </p>
        </div>

        {/* Right Side (dynamic review card) */}
        <div className="md:w-1/2 w-full pl-0 md:pl-4 flex justify-center items-center h-[180px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" p-4 flex items-center gap-4 w-full h-full"
            >
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800">{reviews[index].name}</h3>
                <span className="text-yellow-500 text-sm">{getStars(reviews[index].rating)}</span>
                <p className="text-gray-700 text-sm mt-1">{reviews[index].comment}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
