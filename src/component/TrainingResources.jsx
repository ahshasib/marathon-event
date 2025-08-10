import React from "react";
import { CheckCircle, Timer, Droplet, Heart, Shield } from "lucide-react";

const rules = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Follow the Route",
    desc: "Stay on the marked path at all times to ensure safety and accurate timing.",
  },
  {
    icon: <Timer className="w-8 h-8 text-blue-500" />,
    title: "Pace Yourself",
    desc: "Maintain a steady pace to avoid early exhaustion and finish strong.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-cyan-500" />,
    title: "Stay Hydrated",
    desc: "Use water stations along the route and listen to your body’s needs.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Medical Awareness",
    desc: "Seek immediate assistance if you feel dizzy, overheated, or in pain.",
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-500" />,
    title: "Respect Others",
    desc: "Be mindful of fellow runners and volunteers throughout the event.",
  },
];

const TrainingResources = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Overlapping Images */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Top Image (smaller now) */}
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
            alt="Marathon runners"
            className="rounded-2xl shadow-lg w-64 h-44 object-cover transform hover:scale-105 transition duration-500"
          />
          {/* Bottom Image (bigger now) */}
          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
            alt="Running shoes"
            className="rounded-2xl shadow-lg w-96 h-64 object-cover absolute top-20 left-28 lg:left-40 border-4 border-gray-900 transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side - Rules */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Marathon Rules & Guidelines
          </h2>
          <p className="text-gray-300 mb-6">
            Ensure a safe and fair race for everyone by following these important guidelines during the marathon.
          </p>
          <ul className="space-y-5">
            {rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">{rule.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{rule.title}</h3>
                  <p className="text-gray-400 text-sm">{rule.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingResources;
