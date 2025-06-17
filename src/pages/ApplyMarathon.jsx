import React, { use } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { AuthContext } from '../context/Authcontext/AuthProvider'
import axios from 'axios'
import Swal from 'sweetalert2'

const ApplyMarathon = () => {
    const {id: marathonID} = useParams()
    const {user} = use(AuthContext)
    const { _id,title, registrationStartDate, registrationEndDate, marathonDate, location, distance, description, image, createdAt,registrationCount } = useLoaderData();


const ApplySubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
    const title = form.title.value;
    const StartDate = form.StartDate.value;
    const Phone = form.Phone.value;
    const City = form.City.value;


    const applyInfo = {
        marathonID,
        email,
        fname,
        lname,
        title,
        StartDate,
        Phone,
        City
    }


    axios.post('https://assignment-11-server-ecru-five.vercel.app/applications',applyInfo)
    .then(res=>{
        if (res.data.insertedID || res.data.acknowledged) {
            Swal.fire({
              icon: 'success',
              title: 'Application Submitted!',
              text: `Thank you, ${fname}${lname}, for applying ${title}`,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            })
        }
    })
    .catch(error=>{
        console.log(error)
    })

}

    
  return (
    <div>
        <div className="w-full md:w-[40%]">
                        <p className='text-end font-bold'>count:{registrationCount}</p>
                        <h1>{title}</h1>
                        <div className="card bg-base-100 w-full shadow-2xl">
                            <h2 className='text-4xl font-bold text-center text-white py-5 rounded-t-2xl bg-yellow-500'>Book and join</h2>
                            <form onSubmit={ApplySubmit} className="card-body">
                                <fieldset className="fieldset">
                                    <div className='flex justify-between'>
                                        <div>
                                            <label className="label">First name</label>
                                            <input name='fname' type="text" className="input input-bordered w-full" placeholder="First Name" required />
                                        </div>
                                        <div>
                                            <label className="label">Last name</label>
                                            <input name='lname' type="text" className="input input-bordered w-full" placeholder="Last Name" required />
                                        </div>
                                    </div>

                                    <label className="label">Email</label>
                                    <input
                                name='email'
                                type="email"
                                className="input input-bordered w-full"
                                readOnly
                                defaultValue={user?.email || ''} 
                                required
                            />

                                    <label className="label">Marathon Title</label>
                                    <input name='title' type="text" className="input input-bordered w-full" placeholder="Marathon Title" required />

                                    <label className="label">Start Date</label>
                                    <input name='StartDate' type="text" className="input input-bordered w-full" readOnly defaultValue={marathonDate} required />

                                    <label className="label">Phone Number</label>
                                    <input name='Phone' type="text" className="input input-bordered w-full" placeholder="Phone Number" />

                                    <label className="label">City</label>
                                    <input name='City' type="text" className="input input-bordered w-full" placeholder="City" />

                                    <div className='flex justify-between items-center w-full'>
                                        <p><label className="label mt-2 flex items-center gap-2">
                                            <input type="checkbox" className="checkbox" required />
                                            Everything is ok
                                        </label></p>

                                    </div>

                                    <button type='submit' className="btn bg-yellow-500 mt-4">Registration Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
    </div>
  )
}

export default ApplyMarathon