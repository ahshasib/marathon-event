import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/Authcontext/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-11-server-ecru-five.vercel.app//applications?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => setApplications(data));
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://assignment-11-server-ecru-five.vercel.app//applications/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.deletedCount > 0) {
        setApplications(prev => prev.filter(app => app._id !== id));

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Application has been successfully deleted.',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong while deleting.',
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://assignment-11-server-ecru-five.vercel.app/applications/${editData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Application updated successfully.',
        timer: 2000,
        showConfirmButton: false,
      });

      const updatedList = applications.map(app =>
        app._id === editData._id ? editData : app
      );
      setApplications(updatedList);
      setEditData(null);
    }
  };

  return (
    <div className=" max-w-6xl mx-auto p-6">
       <Helmet>
    <title>MyApplication | MarathonMate</title>
  </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">📄 My Applications</h2>

      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full border rounded-lg">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Title</th>
              <th>Start Date</th>
              <th>Phone</th>
              <th>City</th>
              <th className="text-center">Actions</th>
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
                <td className="flex gap-3 justify-center mt-3">
                  {/* Update Button */}
                  <button
                    onClick={() => setEditData(app)}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => document.getElementById(`delete-modal-${app._id}`).showModal()}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>

                  {/* Delete Modal */}
                  <dialog id={`delete-modal-${app._id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Confirm Delete</h3>
                      <p className="py-4">
                        Are you sure you want to delete application of <span className="font-semibold">{app.fname} {app.lname}</span>?
                      </p>
                      <div className="modal-action">
                        <form method="dialog" className="flex gap-2 items-center">
                          <button className="btn">Cancel</button>
                          <button
                            className="btn btn-error"
                            onClick={() => handleDelete(app._id)}
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

      {/* mobile device it will be show like a card */}
      <div className="md:hidden space-y-4">
        {applications.map(app => (
          <div key={app._id} className="bg-white border shadow rounded-lg p-4 space-y-2">
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Name:</strong> {app.fname} {app.lname}</p>
            <p><strong>Title:</strong> {app.title}</p>
            <p><strong>Start Date:</strong> {app.StartDate}</p>
            <p><strong>Phone:</strong> {app.Phone}</p>
            <p><strong>City:</strong> {app.City}</p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setEditData(app)}
                className="btn btn-sm btn-info "
              >
                Update
              </button>
              <button
                onClick={() => document.getElementById(`delete-modal-${app._id}`).showModal()}
                className="btn btn-sm btn-error "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>




      {/* Update Modal */}
      {editData && (
        <dialog id="update-modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Application</h3>
            <form
              onSubmit={handleUpdate}
              className="space-y-4 mt-4"
            >
              <div>
                <label className="label">Title (readonly)</label>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Start Date (readonly)</label>
                <input
                  type="text"
                  name="startDate"
                  value={editData.StartDate}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editData.Phone}
                  onChange={(e) => setEditData({ ...editData, Phone: e.target.value })}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">City</label>
                <input
                  type="text"
                  name="city"
                  value={editData.City}
                  onChange={(e) => setEditData({ ...editData, City: e.target.value })}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn" onClick={() => setEditData(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyApplications;
