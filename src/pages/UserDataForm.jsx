import React, { useState, useEffect, useContext } from "react";
import { FaRoad, FaClock, FaSyncAlt } from "react-icons/fa";
import moment from "moment-timezone";
import { AuthContext } from "../context/Authcontext/AuthProvider";
import Swal from "sweetalert2";

const emptyDaily = Array.from({ length: 30 }, (_, i) => ({
  day: (i + 1).toString(),
  distance: "", // প্রথমবারে empty string
  time: "",
}));


export default function UserDataForm({ initialData }) {
  const { user } = useContext(AuthContext);

  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [enabledDays, setEnabledDays] = useState(0);
  const [dailyData, setDailyData] = useState(emptyDaily);
  const [editableDays, setEditableDays] = useState([]);

  // Load from localStorage + server
// প্রথমবার load হলে চেক করবো server data আছে কিনা
useEffect(() => {
  const todayBD = moment().tz("Asia/Dhaka");
  setYear(todayBD.year());
  setMonth(todayBD.month() + 1);
  const dayOfMonth = todayBD.date();
  setEnabledDays(dayOfMonth > 30 ? 30 : dayOfMonth);

  const savedLocal = localStorage.getItem("runningData");
  const savedEditable = localStorage.getItem("editableDays");

  let localData = savedLocal ? JSON.parse(savedLocal) : [];

  if (initialData && Array.isArray(initialData) && initialData.length > 0) {
    // পুরানো ইউজার
    const mergedData = emptyDaily.map((item) => {
      const fromLocal = localData.find((d) => d.day === item.day) || {};
      const fromServer = initialData.find((d) => d.day === item.day) || {};
      return {
        day: item.day,
        distance:
          fromLocal.distance ??
          fromServer.distance ??
          "", // server data থাকলে সেট, না থাকলে ""
        time:
          fromLocal.time ??
          fromServer.time ??
          "",
      };
    });
    setDailyData(mergedData);

    if (savedEditable !== null) {
      setEditableDays(JSON.parse(savedEditable));
    } else {
      setEditableDays([]); // পুরানো ইউজার হলে সব readonly
    }
  } else {
    // নতুন ইউজার
    setDailyData(emptyDaily);
    if (savedEditable !== null) {
      setEditableDays(JSON.parse(savedEditable));
    } else {
      setEditableDays(Array.from({ length: 30 }, (_, i) => i)); // সব editable
    }
  }
}, [initialData]);

//
const handleDailyChange = (index, field, value) => {
  const updated = [...dailyData];
  updated[index] = {
    ...updated[index],
    [field]: value,
  };
  setDailyData(updated);
  localStorage.setItem("runningData", JSON.stringify(updated));
};





// Submit
const handleSubmit = async () => {
  try {
    const daysToSend =
      editableDays.length > 0
        ? editableDays // শুধু editable দিনগুলো
        : Array.from({ length: 30 }, (_, i) => i); // প্রথমবারে সব

    const dataToSend = daysToSend.map((index) => {
      const item = dailyData[index];
      return {
        ...item,
        distance: item.distance === "" ? 0 : Number(item.distance),
        time: item.time === "" ? 0 : Number(item.time),
        year,
        month,
      };
    });

    const res = await fetch(`${import.meta.env.VITE_API_URL}/running-data`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.email, dailyData: dataToSend }),
    });

    if (!res.ok) throw new Error("Failed to save data");

    const updated = await res.json();
    if (updated.data?.dailyData) {
      setDailyData(updated.data.dailyData);
    }

    // লক করে দাও
    setEditableDays([]);
    localStorage.setItem("editableDays", JSON.stringify([]));
    localStorage.setItem("runningData", JSON.stringify(dailyData));

    Swal.fire({ title: "Data saved & locked!", icon: "success" });
  } catch (err) {
    Swal.fire({ title: "Error: " + err.message, icon: "error" });
  }
};


// Update button action
const enableEditDay = (index) => {
  if (!editableDays.includes(index)) {
    const updatedEditable = [index]; // শুধু ওই দিন
    setEditableDays(updatedEditable);
    localStorage.setItem("editableDays", JSON.stringify(updatedEditable));
  }
};



  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg space-y-8">
      <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
        Your Daily Running Plan 🏃‍♂️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[520px] overflow-y-auto px-2 py-3">
        {dailyData.map(({ day, distance, time }, i) => (
          <div
            key={day}
            className={`bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 transition-transform duration-300 ${
              i + 1 <= enabledDays
                ? "hover:scale-[1.03]"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <span className="text-xl font-semibold text-purple-600">
                Day {day}
              </span>
              {i + 1 <= enabledDays && (
                <button type="button" onClick={() => enableEditDay(i)}>
                  <FaSyncAlt />
                </button>
              )}
            </div>

            {/* Distance */}
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
                onChange={(e) =>
                  handleDailyChange(i, "distance", e.target.value)
                }
                className="w-full border border-indigo-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                disabled={!editableDays.includes(i)}
              />
            </label>

            {/* Time */}
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
                className="w-full border border-pink-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                disabled={!editableDays.includes(i)}
              />
            </label>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition"
        >
          Submit Your Plan
        </button>
      </div>
    </div>
  );
}
