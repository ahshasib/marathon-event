import React from "react";
import { VscSend } from "react-icons/vsc";
import { motion } from "framer-motion";
import { CiFlag1, CiMobile4 } from "react-icons/ci";
import { Link } from "react-router";

const rules = [
    {
      icon: <CiMobile4 className="w-16 h-16 text-blue-500" />,
      title: "Start your run with the app",
      text: "Download our official marathon app, create your profile, and select the virtual run challenge. Make sure GPS tracking is enabled so every step counts towards your goal.",
    },
    {
      icon: <CiFlag1 className="w-16 h-16 text-green-500" />,
      title: "Finish your run and take a screenshot",
      text: "Complete your chosen distance at your own pace—whether outdoors or on a treadmill. Once finished, take a clear screenshot showing your total distance, time, and date from the app.",
    },
    {
      icon: <VscSend className="w-16 h-16 text-purple-500" />,
      title: "Upload it and get your prize",
      text: "Log in to our website, navigate to the Virtual Run submission page, and upload your screenshot. Our team will verify your entry, and you’ll receive your medal, certificate, and exclusive event goodies.",
    },
  ];
  

const VirtualRun = () => {
  return (
    <section className="py-28 px-4 bg-white text-white">
      <div className="max-w-7xl mx-auto ">
        <span className="lightgreen drop-shadow-sm text-xl">Let's Start a New Journy</span>
       <div className="flex gap-20 py-5 items-center">
       
       <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900 text-left">
      
         Join Virtual Run and <br /> get Reward
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto pt-3">
        No matter where you are, you can be part of the action! Our virtual marathon lets you run from your favorite park, your neighborhood streets, or even on a treadmill. Just follow the simple steps below, track your progress, and share your achievement with the community.
        </p>
       </div>

        {/* Flex Boxes */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-5">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between border border-black   p-6 w-[80%] md:w-1/3 h-[40vh] hover:scale-105 transition-transform duration-300"
            >
              {/* Icon - top left */}
              <div className="self-start">{rule.icon}</div>

              {/* Text - bottom */}
              <div>
                <h2 className="text-2xl text-gray-900 text-left font-semibold">{rule.title}</h2>
                <p className="text-md text-gray-600 text-left mt-2">{rule.text}</p>
              </div>
            </motion.div>
          ))}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="relative overflow-hidden  w-[80%] md:w-1/3 h-[40vh] hover:scale-105 transition-transform duration-300 "
>
  {/* Background Image */}
  <img
    src="r-run.png"
    alt="Virtual Run"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay for readability */}
  {/* <div className="absolute inset-0 bg-black/40"></div> */}

  {/* Text Overlay */}
  <div className="absolute bottom-0 left-0 p-4 z-10">
    <h2 className="text-2xl py-2 font-semibold text-white">
    Let's create a new dream.
    </h2>
    <p className="text-gray-200 text-sm pb-5">Now there will be no obstacles to fulfilling your dreams. If you are confident</p>
   <Link className="bg-white text-black font-bold py-1 px-6  hover:bg-gray-800 hover:text-white transition">Explore Now</Link>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default VirtualRun;
