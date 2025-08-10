import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: './2.jpg',
    title: 'What we do in life echoes in eternity',
    subtitle: 'Running Club',
    description: 'Instead of viewing training as a chore, reframe it as a privilege and an opportunity to improve your physical and mental health.',
    buttonText: 'Explore More',
    buttonLink: 'Learn More',
  },
  {
    id: 2,
    image: './3.png',
    title: 'What we do in life echoes in eternity',
    subtitle: 'Running Club',
    description: 'Instead of viewing training as a chore, reframe it as a privilege and an opportunity to improve your physical and mental health.',
    buttonText: 'Explore More',
    buttonLink: 'Learn More',
  },
  {
    id: 3,
    image: './4.png',
    title: 'What we do in life echoes in eternity',
    subtitle: 'Running Club',
    description: 'Instead of viewing training as a chore, reframe it as a privilege and an opportunity to improve your physical and mental health.',
    buttonText: 'Explore More',
    buttonLink: 'Learn More',
  },
  
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-[8%] md:pl-[20%] text-white px-4">
            {slide.subtitle && (
              <p className="text-xl lightgreen tracking-widest py-4">
                {slide.subtitle}
              </p>
            )}
            <h2 className="text-6xl md:text-8xl mb-4 md:w-[50%]">{slide.title}</h2>
            <p className="text-md md:text-xl mb-6 w-[80%] md:w-[40%] text-gray-200 lg:py-3">
              {slide.description}
            </p>
            <div className='flex gap-5'>

            <a href={slide.buttonLink}>
              <button className="btn bg-white text-black rounded-none px-6 py-2 text-lg border-none shadow-lg hover:bg-gray-400 hover:bg-opacity-40 transition">
                {slide.buttonText}
              </button>
            </a>
            <a href={slide.buttonLink}>
              <button className="btn bg-black text-white rounded-none px-6 py-2 text-lg border-none shadow-lg hover:bg-gray-400 hover:bg-opacity-40 transition">
                {slide.buttonLink}
              </button>
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
