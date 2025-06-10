import React from 'react'
import { NavLink } from 'react-router'

const events = [
  {
    title: "City Sprint Marathon",
    regStart: "2025-06-01",
    regEnd: "2025-06-15",
    marathonDate: "2025-07-01",
    location: "New York City",
    distance: "10km",
    description: "A fast-paced city marathon for all levels.",
    image: "https://i.ibb.co/5gFhJGhs/happy-marathon-runner-showing-smart-watch-her-friend-before-race-nature.jpg",
  }
]

const AllMarathonEvents = () => {
  return (
    <div>
    <div className="px-4 py-12 max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-center mb-10">🏃‍♂️ Marathon Events</h2>
         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
           {events.map((event, idx) => (
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
                   📝 <strong>Registration:</strong> {event.regStart} - {event.regEnd}
                 </p>
                 <p className="text-gray-700 text-sm">{event.description}</p>
                 <div className="mt-3">
                  <NavLink to="/marathondetails">
                  <button className="btn btn-outline btn-primary w-full">See Details</button>
                  </NavLink> 
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
       </div>
  )
}

export default AllMarathonEvents