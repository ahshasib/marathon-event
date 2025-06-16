import React from 'react'
import { Link, useLoaderData } from 'react-router'

const MarathonDetailsPage = () => {
    const { _id,title,registrationCount,regStart,regEnd, marathonDate, location, distance, description, image, createdAt } = useLoaderData()
    const isRegistrationEnded = new Date() > new Date(regEnd);

    return (
        <div className="min-h-screen flex items-center py-10 px-4">

            <div className="bg-white  w-11/12 mx-auto p-6 md:p-10 rounded-2xl shadow-md">

                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left Section: Image & Info */}
                    <div className="w-full md:w-[55%]">
                        <img
                            className="w-full h-auto rounded-xl object-cover"
                            src={image}
                            alt=""
                        />
                        <div className="pt-4">
                            <div className='flex flex-col md:flex-row justify-between'>
                            <h2 className="text-black font-bold text-2xl">{title}</h2>
                            <h3 className="text-gray-500 font-bold text-info">Total Registration Count : {registrationCount? registrationCount : "0"}</h3>
                            </div>
                            <p className="text-gray-500">{location}</p>
                            
                            <p className="text-gray-500 font-bold">Registration Date: {regStart} to   {regEnd}</p>
                            <p className="py-3 text-black bg-yellow-500 p-5 rounded-lg mt-4">{description}</p>
                        </div>

                       <div className='w-full'>
                       {
                       <Link
                       to={isRegistrationEnded ? "#" : `/applymarathon/${_id}`}
                       onClick={(e) => {
                         if (isRegistrationEnded) {
                           e.preventDefault();
                         }
                       }}
                     >
                       <button className={`btn w-full mt-5 font-bold ${isRegistrationEnded ? 'bg-red-400 cursor-not-allowed' : 'bg-info'}`} disabled={isRegistrationEnded}>
                         {isRegistrationEnded ? "Registration Closed" : "Registration Now"}
                       </button>
                     </Link>
                    }
                       </div>
                    </div>

                    
                    
                </div>
            </div>

        </div>
    )
}

export default MarathonDetailsPage