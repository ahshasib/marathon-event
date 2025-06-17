import React from 'react';
import { BookOpen, Dumbbell, HeartPulse, Flame } from 'lucide-react';

const resources = [
  {
    title: "Beginner Training Plan",
    desc: "Get started with a 4-week plan tailored for new runners preparing for their first marathon.",
    icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Nutrition Tips",
    desc: "Discover what to eat before, during, and after your run to stay energized and recover fast.",
    icon: <Flame className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Injury Prevention",
    desc: "Learn how to stretch properly and avoid common injuries with expert-backed guidance.",
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Motivational Reads",
    desc: "Read inspiring stories and advice from seasoned marathoners to keep you going strong.",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
  },
];

const TrainingResources = () => {
  return (
    <section className="py-16 px-4 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Training & Resources
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Get the tools and knowledge you need to train smart and cross the finish line strong.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingResources;
