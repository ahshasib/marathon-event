import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, CartesianGrid, Legend
} from "recharts";
import { motion } from "framer-motion";
import { FaRoad, FaTrophy, FaCalendarAlt, FaRunning } from "react-icons/fa";

const Overview = () => {
  const fakeData = {
    lifetime: 350,
    longestRun: 42,
    monthlyData: [
      { month: "Jan", distance: 30 },
      { month: "Feb", distance: 40 },
      { month: "Mar", distance: 25 },
      { month: "Apr", distance: 50 },
      { month: "May", distance: 45 },
      { month: "Jun", distance: 60 },
      { month: "Jul", distance: 55 },
      { month: "Aug", distance: 65 },
      { month: "Sep", distance: 70 },
      { month: "Oct", distance: 62 },
      { month: "Nov", distance: 58 },
      { month: "Dec", distance: 30 }
    ],
    dailyData: Array.from({ length: 30 }, (_, i) => ({
      day: (i + 1).toString(),
      distance: Math.floor(Math.random() * 10) + 3
    }))
  };

  const [data, setData] = useState(fakeData);

  useEffect(() => {
    fetch("http://localhost:3000/api/user-stats")
      .then(res => {
        if (!res.ok) throw new Error("API not found");
        return res.json();
      })
      .then(stats => setData(stats))
      .catch(() => setData(fakeData));
  }, []);

  const COLORS = ["#ff4b5c", "#ff9a76", "#1e90ff", "#00c49f"];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    }),
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  const StatDetails = ({ icon, label, value }) => (
    <div className="flex  items-center gap-3 mt-4 bg-gradient-to-r from-gray-50 to-gray-100  p-3 shadow-inner">
      <div className="text-2xl text-indigo-500">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-lg font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gradient-to-br  min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">🏃 Overview</h1>
      <p className="mb-8 text-gray-600">Your running stats, trends, and progress.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Lifetime Distance */}
       {/* Lifetime Distance */}
<motion.div 
  custom={0}
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
  className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 shadow-xl"
>
  <h2 className="text-lg font-semibold mb-2 text-gray-700">Lifetime Distance</h2>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <defs>
        <linearGradient id="lifetimeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4b5c" stopOpacity={0.9} />
          <stop offset="50%" stopColor="#ff9a76" stopOpacity={0.85} />
          <stop offset="100%" stopColor="#ffd93d" stopOpacity={0.9} />
        </linearGradient>
      </defs>
      <Pie
        data={[{ name: "Distance", value: data.lifetime }]}
        dataKey="value"
        outerRadius={90}
        label
        stroke="url(#lifetimeGradient)"
        strokeWidth={6}
        fill="url(#lifetimeGradient)"
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
  <StatDetails icon={<FaRoad />} label="Total Distance" value={`${data.lifetime} km`} />
</motion.div>


        {/* Longest Run */}
        <motion.div 
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-gradient-to-br from-blue-50 to-green-50 p-4 shadow-xl "
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Longest Run</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[{ name: "Longest Run", distance: data.longestRun }]}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e90ff" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#00c49f" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#90cdf4" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="distance" fill="url(#barGradient)" stroke="#1e90ff" strokeWidth={2} />
            </BarChart>
          </ResponsiveContainer>
          <StatDetails icon={<FaTrophy />} label="Best Distance" value={`${data.longestRun} km`} />
        </motion.div>

        {/* Monthly Activity */}
        <motion.div 
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 shadow-xl col-span-1 md:col-span-2 "
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Monthly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlyData}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff4b5c" />
                  <stop offset="100%" stopColor="#ff9a76" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f6ad55" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="distance" stroke="url(#lineGradient)" strokeWidth={3} dot={{ r: 5, stroke: "#ff4b5c", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
          <StatDetails icon={<FaCalendarAlt />} label="Avg per Month" value={`${Math.round(data.lifetime / 12)} km`} />
        </motion.div>

        {/* Daily Runs */}
        <motion.div 
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-gradient-to-br from-green-50 to-blue-50 p-4  shadow-xl col-span-1 md:col-span-2"
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Daily Runs (This Month)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.dailyData}>
              <defs>
                <linearGradient id="dailyBarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00c49f" />
                  <stop offset="100%" stopColor="#1e90ff" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#68d391" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="distance" fill="url(#dailyBarGradient)" stroke="#00c49f" strokeWidth={2} />
            </BarChart>
          </ResponsiveContainer>
          <StatDetails icon={<FaRunning />} label="Avg per Day" value={`${(data.dailyData.reduce((a, b) => a + b.distance, 0) / data.dailyData.length).toFixed(1)} km`} />
        </motion.div>

      </div>
    </div>
  );
};

export default Overview;
