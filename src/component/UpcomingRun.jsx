import React from 'react'


const events = [
    {
      title: "Forest Trail Run",
      date: "2025-08-05",
      location: "Oregon, USA",
      distance: "25km",
      description: "Explore the dense green trails with this semi-competitive marathon.",
      image: "https://i.ibb.co/5gFhJGhs/happy-marathon-runner-showing-smart-watch-her-friend-before-race-nature.jpg",
    },
    {
      title: "Coastal Sprint",
      date: "2025-08-10",
      location: "Brighton, UK",
      distance: "10km",
      description: "Enjoy the cool breeze of the coast in this flat, fast-paced sprint.",
      image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
    },
    {
      title: "Sunset Run",
      date: "2025-08-12",
      location: "Sydney, Australia",
      distance: "15km",
      description: "Experience the golden hours while running through iconic spots.",
      image: "https://i.ibb.co/gMXgyX0F/healthy-lifestyle-running-outdoors.jpg",
    },
    {
      title: "Rainforest Dash",
      date: "2025-08-15",
      location: "Amazon, Brazil",
      distance: "30km",
      description: "Run through one of the most unique ecosystems on earth.",
      image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
    },
    {
      title: "Historic City Marathon",
      date: "2025-08-20",
      location: "Rome, Italy",
      distance: "42km",
      description: "Trace the steps of ancient history while challenging your limits.",
      image: "https://i.ibb.co/5gFhJGhs/happy-marathon-runner-showing-smart-watch-her-friend-before-race-nature.jpg",
    },
    {
      title: "Midnight Challenge",
      date: "2025-08-25",
      location: "Reykjavik, Iceland",
      distance: "20km",
      description: "A unique experience running under the midnight sun.",
      image: "https://i.ibb.co/gMXgyX0F/healthy-lifestyle-running-outdoors.jpg",
    },
  ];
  


const UpcomingRun = () => {
  return (
    <div className="bg-gradient-to-br py-16 px-4 md:px-10">
    <h2 className="text-3xl font-bold text-center mb-10">🌟 Upcoming Marathons</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((card, idx) => (
         <div
         className="relative rounded-2xl overflow-hidden h-80 shadow-xl hover:scale-105 transition-transform duration-300"
         style={{
           backgroundImage: `url(${card.image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       >
         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5 text-white">
           <p className="text-sm font-semibold text-blue-300">{card.category}</p>
           <h3 className="text-lg font-bold mt-1">{card.title}</h3>
           <p className="text-sm text-white/80 mt-2">{card.description}</p>
           <p className="text-sm mt-4 text-white/60">{card.date}</p>
         </div>
       </div>
      ))}
    </div>
  </div>
  )
}

export default UpcomingRun