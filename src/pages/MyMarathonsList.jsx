import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/Authcontext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyMarathonsList = () => {
  const { user } = use(AuthContext)
  const [myMarathon, setMymarathon] = useState([])
  const [selectedMarathon, setSelectedMarathon] = useState(null);

  // const [marathons, setMarathons] = useState([
  //     {
  //       id: 1,
  //       title: "Dhaka City Marathon",
  //       startDate: "2025-07-10",
  //       image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Beach Run Fest",
  //       startDate: "2025-08-15",
  //       image: "https://i.ibb.co/WWRNbjvw/happy-senior-running-through-finish-line.jpg",
  //     },
  //   ]);



  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-marathon?email=${user.email}`,{
        headers:{
          authorization: `Bearer ${user.accessToken}`,
          
        }
        
      }     
    )
        .then(res => res.json())
        .then(data => setMymarathon(data))
    }
    
  }, [user?.email])


  

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/marathon/${id}`);
  
      if (res.data.deletedCount > 0) {
        setMymarathon((prev) => prev.filter((marathon) => marathon._id !== id));
  
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Marathon has been successfully deleted.',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error('Delete failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong while deleting.',
      });
    }
  };


  const handleUpdate = async (updated) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/marathon/${updated._id}`,
        {
          title: updated.title,
          marathonDate: updated.startDate, 
        }
      );
  
      if (response.data.modifiedCount > 0) {
        
        const updatedForUI = {
          ...updated,
          marathonDate: updated.startDate, 
          startDate: updated.startDate     
        };
  
        setMymarathon((prev) =>
          prev.map((m) => (m._id === updated._id ? updatedForUI : m))
        );
  
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Marathon has been updated successfully.',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error('Update failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong.',
      });
    }
  };
  
    





 


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">📋 My Marathons</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border rounded-lg">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Start Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myMarathon.map((marathon) => (
              <tr key={marathon._id}>
                <td>
                  <img src={marathon.image} alt={marathon.title} className="w-16 h-16 rounded" />
                </td>
                <td>{marathon.title}</td>
                <td>{marathon.
                  marathonDate}</td>
                <td className="flex gap-3 justify-center mt-3">
                  {/* Update Button */}
                  <button
                    onClick={() => setSelectedMarathon(marathon)}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => document.getElementById(`delete-modal-${marathon.id}`).showModal()}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>

                  {/* Delete Modal */}
                  <dialog id={`delete-modal-${marathon.id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Confirm Delete</h3>
                      <p className="py-4">
                        Are you sure you want to delete <span className="font-semibold">{marathon.title}</span>?
                      </p>
                      <div className="modal-action">
                        <form method="dialog" className="flex gap-2 items-center">
                          <button className="btn">Cancel</button>
                          <button
                            className="btn btn-error"
                            onClick={() => handleDelete(marathon._id)}
                          >
                            Confirm
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedMarathon && (
        <dialog id="update-modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Marathon</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updated = {
                  ...selectedMarathon,
                  title: e.target.title.value,
                  startDate: e.target.startDate.value,
                  _id: selectedMarathon._id
                };
                handleUpdate(updated);
                setSelectedMarathon(null);
              }}
              className="space-y-4 mt-4"
            >
              <div>
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedMarathon.title}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={selectedMarathon.startDate}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn" onClick={() => setSelectedMarathon(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  )
}

export default MyMarathonsList