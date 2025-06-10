
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const AddMarathon = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      title: '',
      registrationStart: null,
      registrationEnd: null,
      marathonDate: null,
      location: '',
      distance: '25k',
      description: '',
      image: '',
      createdAt: new Date(),
      registrationCount: 0,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleDateChange = (date, name) => {
      setFormData({ ...formData, [name]: date });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission logic here
      console.log('Submitted Marathon:', formData);
      navigate('/dashboard');
    };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
    <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Add Marathon</h2>

      <div className="mb-4">
        <label className="label">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="input input-bordered w-full" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label block">Registration Start Date</label>
          <DatePicker
            selected={formData.registrationStart}
            onChange={(date) => handleDateChange(date, 'registrationStart')}
            className="input input-bordered w-full"
            placeholderText="Select start date"
            required
          />
        </div>
        <div>
          <label className="label block">Registration End Date</label>
          <DatePicker
            selected={formData.registrationEnd}
            onChange={(date) => handleDateChange(date, 'registrationEnd')}
            className="input input-bordered w-full"
            placeholderText="Select end date"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="label block">Marathon Date</label>
        <DatePicker
          selected={formData.marathonDate}
          onChange={(date) => handleDateChange(date, 'marathonDate')}
          className="input input-bordered w-full"
          placeholderText="Select marathon date"
          required
        />
      </div>

      <div className="mt-4">
        <label className="label">Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="input input-bordered w-full" required />
      </div>

      <div className="mt-4">
        <label className="label">Distance</label>
        <select name="distance" value={formData.distance} onChange={handleChange} className="select select-bordered w-full">
          <option value="25k">25k</option>
          <option value="10k">10k</option>
          <option value="3k">3k</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="label">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full" required></textarea>
      </div>

      <div className="mt-4">
        <label className="label">Image URL</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} className="input input-bordered w-full" required />
      </div>

      {formData.image && (
        <div className="mt-4">
          <img src={formData.image} alt="Preview" className="w-full rounded-lg" />
        </div>
      )}

      <div className="mt-6 text-center">
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default AddMarathon