import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyMarathonsList = () => {
  const { user } = useContext(AuthContext);
  const [myMarathon, setMymarathon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyMarathons = async () => {
      if (!user?.email) return;
      setLoading(true);
      try {
        // force token refresh to be safe: pass true if you want a fresh token
        const token = await user.getIdToken(/* forceRefresh= */ true);
        console.log('Firebase ID Token:', token);

        const res = await fetch(`${import.meta.env.VITE_API_URL}/my-marathon?email=${encodeURIComponent(user.email)}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (res.status === 401) {
          throw new Error('Unauthorized (401)');
        }
        if (res.status === 403) {
          throw new Error('Forbidden (403)');
        }
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setMymarathon(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Fetch error:', err);
        setMymarathon([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMyMarathons();
  }, [user]);

  const handleDelete = async (id) => {
    if (!user) return;
    try {
      const token = await user.getIdToken(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/marathon/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 401) throw new Error('Unauthorized');
      if (!res.ok) throw new Error('Delete failed');

      const result = await res.json();
      if (result.deletedCount > 0) {
        setMymarathon(prev => prev.filter(m => m._id !== id));
        Swal.fire({ icon: 'success', title: 'Deleted!', text: 'Marathon deleted', timer: 1500, showConfirmButton: false });
      } else {
        throw new Error('Delete not applied');
      }
    } catch (err) {
      console.error('Delete error:', err);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Could not delete' });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Helmet><title>MyMarathon | MarathonMate</title></Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">My Marathons</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr><th>Image</th><th>Title</th><th>Marathon Date</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {myMarathon.map(m => (
              <tr key={m._id}>
                <td><img src={m.image} alt={m.title} className="w-16 h-16 rounded" /></td>
                <td>{m.title}</td>
                <td>{m.marathonDate}</td>
                <td>
                  <button className="btn btn-sm btn-error" onClick={() => handleDelete(m._id)}>Delete</button>
                </td>
              </tr>
            ))}
            {myMarathon.length === 0 && <tr><td colSpan="4" className="text-center">No marathons found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathonsList;
