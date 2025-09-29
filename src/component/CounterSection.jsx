import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, label, description, linkText }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 30); // update every 30ms

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 30);
      return () => clearInterval(counter);
    }
  }, [inView, end]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-6 text-center max-w-xs md:max-w-sm"
    >
      <h2 className="lightgreen text-5xl md:text-6xl font-extrabold tracking-wide">
        {count.toLocaleString()}
      </h2>
      <p className="uppercase tracking-widest text-white text-sm md:text-base mt-2">
        {label}
      </p>
      <p className="text-gray-300 mt-3 text-sm md:text-base">{description}</p>
      <a
        href="#"
        className="lightgreen font-bold uppercase mt-5 underline underline-offset-4 hover:text-yellow-300"
      >
        {linkText}
      </a>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section
      className="bg-black py-20 px-5 flex flex-col md:flex-row justify-center items-center gap-10 w-full mx-auto border-b-8 border-yellow-500"
    >
      <Counter
        end={195}
        label="Running Awards"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
        linkText="Our Awards"
      />
      <Counter
        end={2450}
        label="Active Members"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
        linkText="See Reviews"
      />
      <Counter
        end={85000}
        label="Weekly Mileage"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
        linkText="Explore Now"
      />
    </section>
  );
};

export default CounterSection;
