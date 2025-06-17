import React, { use, useEffect, useState } from 'react'
import Loading from './Loading';
import { Link } from 'react-router';

// const events = [
//   {
//     title: "City Sprint Marathon",
//     regStart: "2025-06-01",
//     regEnd: "2025-06-15",
//     marathonDate: "2025-07-01",
//     location: "New York City",
//     distance: "10km",
//     description: "A fast-paced city marathon for all levels.",
//     image: "https://i.ibb.co/5gFhJGhs/happy-marathon-runner-showing-smart-watch-her-friend-before-race-nature.jpg",
//   },
//   {
//     title: "Beachside Challenge",
//     regStart: "2025-06-05",
//     regEnd: "2025-06-20",
//     marathonDate: "2025-07-10",
//     location: "California Coast",
//     distance: "21km",
//     description: "Run along scenic beaches and ocean breeze.",
//     image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
//   },
//   {
//     title: "Mountain Trail Marathon",
//     regStart: "2025-06-03",
//     regEnd: "2025-06-18",
//     marathonDate: "2025-07-05",
//     location: "Colorado Peaks",
//     distance: "42km",
//     description: "Test your limits on a rugged mountain trail.",
//     image: "https://i.ibb.co/gMXgyX0F/healthy-lifestyle-running-outdoors.jpg",
//   },
//   {
//     title: "Urban Night Run",
//     regStart: "2025-06-08",
//     regEnd: "2025-06-25",
//     marathonDate: "2025-07-15",
//     location: "Tokyo, Japan",
//     distance: "15km",
//     description: "Experience the thrill of running through a neon city at night.",
//     image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
//   },
//   {
//     title: "Desert Ultra",
//     regStart: "2025-06-10",
//     regEnd: "2025-06-30",
//     marathonDate: "2025-07-20",
//     location: "Sahara Desert",
//     distance: "50km",
//     description: "A challenging endurance race through the sands.",
//     image: "https://i.ibb.co/5gFhJGhs/happy-marathon-runner-showing-smart-watch-her-friend-before-race-nature.jpg",
//   },
//   {
//     title: "Riverbank Relay",
//     regStart: "2025-06-12",
//     regEnd: "2025-07-01",
//     marathonDate: "2025-07-25",
//     location: "Amsterdam, Netherlands",
//     distance: "5km x 4",
//     description: "Team relay marathon across beautiful canals.",
//     image: "https://i.ibb.co/gMXgyX0F/healthy-lifestyle-running-outdoors.jpg",
//   },
// ];



const MarathonEvents = () => {
const [data,setdata] = useState([]);

useEffect(()=>{
   fetch('https://assignment-11-server-ecru-five.vercel.app/marathon/latest')
  .then(res=>res.json())
  .then(json => setdata(json))
},[])

if(!data.length) return <Loading></Loading>


  return (
    <div>
 <div className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center pb-4 md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">🏃‍♂️ Marathon Events</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((event, idx) => (
          <div
            key={idx}
            className="card shadow-xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:scale-[1.03] transition-transform hover:shadow-2xl duration-300"
          >
            <figure className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-2 left-2 badge badge-primary text-white">{event.distance}</div>
            </figure>
            <div className="card-body space-y-2">
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600">
                📍 <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm text-gray-600">
                🗓️ <strong>Marathon:</strong> {event.marathonDate}
              </p>
              <p className="text-sm text-gray-600">
                📝 <strong>Registration:</strong> {event.registrationStartDate} - {event.registrationEndDate}
              </p>
              <p className="text-gray-700 text-sm">{event.description}</p>
              <div className="mt-3">
               <Link to={`/marathon/${event._id}`}> <button className="btn btn-outline btn-primary w-full">See Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MarathonEvents