import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/Authcontext/AuthProvider'



const MyApplications = () => {
const {user} = use(AuthContext)
const [selectedApp, setSelectedApp] = useState(null);
const [applications,setApplications]=useState([]);
const[searchtitle,setsearchtitle] = useState("")

useEffect(()=>{
   if(user?.email){
    fetch(`http://localhost:3000/applications?email=${user.email}&title=${searchtitle}`)
    .then(res => res.json())
    .then(data => setApplications(data))
   }
},[user?.email,searchtitle])


return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>
  
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full max-w-md"
          onChange={(e) => setsearchtitle(e.target.value)}
        />
      </div>
  
      {/* Table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Title</th>
              <th>Start Date</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app._id}>
                <td>{app.email}</td>
                <td>{app.fname} {app.lname}</td>
                <td>{app.title}</td>
                <td>{app.StartDate}</td>
                <td>{app.Phone}</td>
                <td>{app.City}</td>
                <td className="flex flex-col gap-2 md:flex-row">
                  <button className="btn btn-sm bg-blue-500 text-white">Update</button>
                  <button className="btn btn-sm bg-red-500 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Card format for mobile */}
      <div className="md:hidden space-y-4">
        {applications.map(app => (
          <div key={app._id} className="bg-white shadow-md rounded p-4">
            <p><span className="font-semibold">Email:</span> {app.email}</p>
            <p><span className="font-semibold">Name:</span> {app.fname} {app.lname}</p>
            <p><span className="font-semibold">Title:</span> {app.title}</p>
            <p><span className="font-semibold">Start Date:</span> {app.StartDate}</p>
            <p><span className="font-semibold">Phone:</span> {app.Phone}</p>
            <p><span className="font-semibold">City:</span> {app.City}</p>
            <div className="mt-3 flex gap-2">
              <button className="btn btn-sm bg-blue-500 text-white">Update</button>
              <button className="btn btn-sm bg-red-500 text-white ">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  


export default MyApplications