import React from 'react'
import { Link, useLoaderData } from 'react-router'

const MarathonDetailsPage = () => {
    const { _id,title, registrationStartDate, registrationEndDate, marathonDate, location, distance, description, image, createdAt } = useLoaderData()

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
                            <h2 className="text-black font-bold text-2xl">{title}</h2>
                            <p className="text-gray-500">{location}</p>
                            <p className="text-gray-500 font-bold">Registration Date: {registrationStartDate} to   {registrationEndDate}</p>
                            <p className="py-3 text-black bg-yellow-500 p-5 rounded-lg mt-4">{description}</p>
                        </div>
                    </div>

                    <Link to={`/applymarathon/${_id}`}><button className='btn'>register now</button></Link>
                    
                </div>
            </div>

        </div>
    )
}

export default MarathonDetailsPage