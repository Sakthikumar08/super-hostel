import React, { useEffect, useState } from 'react';
import './ComplaintreportStyle.css';

const Complaintreport = () => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [complaints, setComplaints] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch(`${API_URL}/api/complaints`);
        if (!response.ok) {
          throw new Error('Failed to fetch complaints');
        }
        const data = await response.json();

        // Group complaints by type
        const groupedComplaints = data.reduce((acc, complaint) => {
          const { complaintType } = complaint;
          if (!acc[complaintType]) {
            acc[complaintType] = [];
          }
          acc[complaintType].push(complaint);
          return acc;
        }, {});

        setComplaints(groupedComplaints);
      } catch (err) {
        console.error('Error fetching complaints:', err);
        setError('Unable to fetch complaints. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  if (loading) {
    return <p>Loading complaints...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Complaint Report</h2>
      {Object.keys(complaints).length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        Object.entries(complaints).map(([type, complaintsList]) => (
          <div key={type} className="complaint-box">
            <h3>{type}</h3>
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Room Number</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {complaintsList.map((complaint) => (
                  <tr key={complaint._id}>
                    <td>{complaint.name}</td>
                    <td>{complaint.email}</td>
                    <td>{complaint.department}</td>
                    <td>{complaint.roomNumber}</td>
                    <td>{new Date(complaint.date).toLocaleDateString()}</td>
                    <td>{complaint.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default Complaintreport;
