
import React, { use, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/Authcontext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';



const AddMarathon = () => {
const {user} = use(AuthContext)
 
  const [registrationStart, setRegistrationStart] = useState(null);
  const [registrationEnd, setRegistrationEnd] = useState(null);
  const [marathonDate, setMarathonDate] = useState(null);


  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())
    data.createdAt = new Date().toISOString();
    data.registrationCount = 0;
    
   axios.post('http://localhost:3000/marathon',data)
   .then(res=>{
    if(res.data.insertedId){
      Swal.fire({
        title: "This Marathon has been saved and published!",
        icon: "success",
        draggable: true
      });
    }
   })
   .catch(error =>{
    console.log(error)
   }
   )

    // navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Add Marathon</h2>

        <div className="mb-4">
          <label className="label">Marathon Title</label>
          <input type="text" name="title" className="input input-bordered w-full" required />
        </div>

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

        <div className="mt-4">
          <label className="label">Location</label>
          <input type="text" name="location" className="input input-bordered w-full" required />
        </div>

        <div className="mt-4">
          <label className="label">Distance</label>
          <select name="distance" className="select select-bordered w-full">
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="label">Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full" required></textarea>
        </div>

        <div className="mt-4">
          <label className="label">Image URL</label>
          <input type="text" name="image" className="input input-bordered w-full" required />
        </div>

        <div className="mt-4">
          <label className="label">Email</label>
          <input type="text" name="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly required />
        </div>


        <div className="mt-4">
          <img src="" alt="Preview" className="w-full rounded-lg" />
        </div>


        <div className="mt-6 text-center">
          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddMarathon