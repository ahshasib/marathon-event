import React from 'react';
import { Link, useLoaderData } from 'react-router';
import GoogleMap from '../component/GoogleMap';
import CountdownTimer from '../component/CountdownTimer'; 
import { Helmet } from 'react-helmet-async';
import Loading from '../component/Loading';

const MarathonDetailsPage = () => {
 
  const data = useLoaderData();
if (!data) return <Loading></Loading>;
const {
  _id, title, registrationCount, regStart, regEnd, marathonDate,
  City, location, distance, description, image, createdAt
} = data
  

  const isRegistrationEnded = new Date() > new Date(regEnd);

  const locationCoords = {
    Chattogram: { lat: 22.3569, lng: 91.7832 },
    Dhaka: { lat: 23.8103, lng: 90.4125 },
    Khulna: { lat: 22.8456, lng: 89.5403 },
    Rajshahi: { lat: 24.3745, lng: 88.6042 },
    Rangpur: { lat: 25.7482, lng: 89.2397 },
    Sylhet: { lat: 24.8949, lng: 91.8687 },
  };

  const latLng = locationCoords[City] || { lat: 22.3569, lng: 91.7832 };

  return (
    <div className="min-h-screen flex items-center py-10 px-4">
       <Helmet>
    <title>MarathonDetails | MarathonMate</title>
  </Helmet>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 w-11/12 mx-auto p-6 md:p-10 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="w-full md:w-[55%]">
            <img className="w-full h-auto rounded-xl object-cover" src={image} alt={title} />

            <div className="pt-4 space-y-2">
              <div className='flex flex-col md:flex-row justify-between gap-2'>
                <h2 className="text-black font-bold text-2xl">{title}</h2>
                <h3 className="text-red-400 font-bold">Total Registration: {registrationCount || 0}</h3>
              </div>

              <p className="text-gray-500">📍 {location}</p>
              <p className="text-gray-500 font-bold">📅 Registration: {regStart} → {regEnd}</p>

              <p className="py-3 text-black bg-gray-100 p-5 rounded-lg mt-4">{description}</p>

              <CountdownTimer targetDate={marathonDate} /> {/* Countdown added here */}

              <Link
                to={isRegistrationEnded ? "#" : `/applymarathon/${_id}`}
                onClick={(e) => isRegistrationEnded && e.preventDefault()}
              >
                <button className={`btn w-full mt-5 font-bold ${isRegistrationEnded ? 'bg-red-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-400 to-green-500'}`} disabled={isRegistrationEnded}>
                  {isRegistrationEnded ? "Registration Closed" : "Register Now"}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-[40%] mt-6 md:mt-0'>
            <GoogleMap lat={latLng.lat} lng={latLng.lng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetailsPage;
