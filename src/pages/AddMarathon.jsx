import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/Authcontext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { getAuth } from "firebase/auth";
const AddMarathon = () => {
  const { user } = useContext(AuthContext);
 
  const [registrationStart, setRegistrationStart] = useState(null);
  const [registrationEnd, setRegistrationEnd] = useState(null);
  const [marathonDate, setMarathonDate] = useState(null);

  
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.createdAt = new Date().toISOString();
  data.registrationCount = 0;

  try {
    // Firebase ID Token নেওয়া
    const auth = getAuth();
    const token = await auth.currentUser.getIdToken();

    // Axios দিয়ে পাঠানো
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/marathon`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.insertedId) {
      Swal.fire({
        title: "This Marathon has been saved and published!",
        icon: "success",
        draggable: true
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Unauthorized or Failed to Save",
      text: "Please login again or check your token.",
      icon: "error"
    });
  }
};

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <Helmet>
        <title>AddMarathon | MarathonMate</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 ">
          Add Marathon
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="label">Marathon Title</label>
          <input type="text" name="title" className="input input-bordered w-full" required />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label block">Registration Start Date</label>
            <DatePicker
              selected={registrationStart}
              onChange={(date) => setRegistrationStart(date)}
              name='regStart'
              className="input input-bordered w-full"
              placeholderText="Select start date"
              required
            />
          </div>
          <div>
            <label className="label block">Registration End Date</label>
            <DatePicker
              selected={registrationEnd}
              onChange={(date) => setRegistrationEnd(date)}
              name='regEnd'
              className="input input-bordered w-full"
              placeholderText="Select end date"
              required
            />
          </div>
        </div>

        {/* Marathon Date */}
        <div className="mt-4">
          <label className="label block">Marathon Date</label>
          <DatePicker
            selected={marathonDate}
            onChange={(date) => setMarathonDate(date)}
            name='marathonDate'
            className="input input-bordered w-full"
            placeholderText="Select marathon date"
            required
          />
        </div>

        {/* Location */}
        <div className="mt-4">
          <label className="label">Location</label>
          <input type="text" name="location" className="input input-bordered w-full" required />
        </div>

        {/* Distance */}
        <div className="mt-4">
          <label className="label">Distance</label>
          <select name="distance" className="select select-bordered w-full">
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        {/* City */}
        <div className="mt-4">
          <label className="label">City</label>
          <select name="city" className="select select-bordered w-full">
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        {/* Description */}
        <div className="mt-4">
          <label className="label">Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full" required></textarea>
        </div>

        {/* Image */}
        <div className="mt-4">
          <label className="label">Image URL</label>
          <input type="text" name="image" className="input input-bordered w-full" required />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="label">Email</label>
          <input type="text" name="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly required />
        </div>

        {/* Submit */}
        <div className="mt-6 text-center">
          <button type="submit" className="btn bg-black border border-white text-white w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMarathon;
