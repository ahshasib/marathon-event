import React, { useState, useEffect, useContext } from "react";
import { FaRoad, FaClock } from "react-icons/fa";
import moment from "moment-timezone";
import { AuthContext } from "../context/Authcontext/AuthProvider";
import Swal from "sweetalert2";

const emptyDaily = Array.from({ length: 30 }, (_, i) => ({
  day: (i + 1).toString(),
  distance: 0,
  time: 0,
}));

export default function UserDataForm({ onSubmit, initialData }) {
  const { user } = useContext(AuthContext);

  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [enabledDays, setEnabledDays] = useState(0);
  const [dailyData, setDailyData] = useState(emptyDaily);

  useEffect(() => {
    const todayBD = moment().tz("Asia/Dhaka");
    setYear(todayBD.year());
    setMonth(todayBD.month() + 1);
    const dayOfMonth = todayBD.date();

    setEnabledDays(dayOfMonth > 30 ? 30 : dayOfMonth);

    if (initialData && Array.isArray(initialData)) {
      // initialData থেকে full dailyData merge করে নাও (পুরোনো + নতুন)
      const mergedData = emptyDaily.map((item) => {
        const old = initialData.find(d => d.day === item.day) || {};
        return {
          day: item.day,
          distance: old.distance || 0,
          time: old.time || 0,
        };
      });
      setDailyData(mergedData);
    }
  }, [initialData]);

  const handleDailyChange = (index, field, value) => {
    if (index + 1 > enabledDays) return; // disabled দিন এডিট করতে দেবে না
    const newData = [...dailyData];
    newData[index][field] = value === "" ? 0 : Number(value);
    setDailyData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate non-negative distance & time
    for (let i = 0; i < enabledDays; i++) {
      if (dailyData[i].distance < 0 || dailyData[i].time < 0) {
        Swal.fire({
          title: `Error on Day ${i + 1}: Distance and time cannot be negative.`,
          icon: "error",
        });
        return;
      }
    }

    try {
      // শুধু enabledDays পর্যন্ত data পাঠাবে
      const filteredData = dailyData.slice(0, enabledDays);

      // Server-এ পাঠানোর জন্য year, month যোগ করো
      const dataToSend = filteredData.map((item) => ({
        day: item.day,
        distance: item.distance,
        time: item.time,
        year,
        month,
      }));

      const response = await fetch(`${import.meta.env.VITE_API_URL}/running-data`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.email,
          dailyData: dataToSend,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update running data");
      }

      const updatedData = await response.json();

      // সার্ভার থেকে আসা full dailyData কে set করবে, তাই আগের data থাকবে
      if (updatedData.data?.dailyData) {
        setDailyData(updatedData.data.dailyData);
      }

      Swal.fire({
        title: "Running data updated successfully!",
        icon: "success",
        draggable: true,
      });

      if (onSubmit) onSubmit(updatedData);
    } catch (error) {
      Swal.fire({
        title: "Error: " + error.message,
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg space-y-8"
    >
      <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
        Your Daily Running Plan 🏃‍♂️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[520px] overflow-y-auto px-2 py-3">
        {dailyData.map(({ day, distance, time }, i) => (
          <div
            key={day}
            className={`bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 transition-transform duration-300 ${
              i + 1 <= enabledDays ? "hover:scale-[1.03]" : "opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="text-xl font-semibold text-purple-600 border-b pb-2 mb-2">Day {day}</div>

            {/* Distance Input */}
            <label className="flex flex-col gap-1 text-gray-600 font-medium">
              <span className="flex items-center gap-2">
                <FaRoad className="text-indigo-500 w-5 h-5" /> Distance (km)
              </span>
              <input
                type="number"
                min={0}
                step="0.01"
                value={distance === 0 ? "" : distance}
                placeholder="0"
                onChange={(e) => handleDailyChange(i, "distance", e.target.value)}
                className="w-full border border-indigo-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
                disabled={i + 1 > enabledDays}
              />
            </label>

            {/* Time Input */}
            <label className="flex flex-col gap-1 text-gray-600 font-medium">
              <span className="flex items-center gap-2">
                <FaClock className="text-pink-500 w-5 h-5" /> Time (minutes)
              </span>
              <input
                type="number"
                min={0}
                step="1"
                value={time === 0 ? "" : time}
                placeholder="0"
                onChange={(e) => handleDailyChange(i, "time", e.target.value)}
                className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition"
                disabled={i + 1 > enabledDays}
              />
            </label>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition"
        >
          Submit Your Plan
        </button>
      </div>
    </form>
  );
}
