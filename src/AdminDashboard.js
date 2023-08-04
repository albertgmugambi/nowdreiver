// components/AdminDashboard.js
import React, { useState } from 'react';
import { firestore } from '../firebase';

const AdminDashboard = () => {
  const [driverName, setDriverName] = useState('');
  const [dateOfLatestTrip, setDateOfLatestTrip] = useState('');
  const [latestTripDestination, setLatestTripDestination] = useState('');
  const [totalNumberOfTrips, setTotalNumberOfTrips] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Store the entered data in Firestore
    await firestore.collection('data').add({
      driverName,
      dateOfLatestTrip,
      latestTripDestination,
      totalNumberOfTrips,
    });
    alert('Data submitted successfully!');
    // Clear the input fields after submitting
    setDriverName('');
    setDateOfLatestTrip('');
    setLatestTripDestination('');
    setTotalNumberOfTrips('');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>Driver's Name:</label>
        <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} required />
        {/* Add other input fields for dateOfLatestTrip, latestTripDestination, and totalNumberOfTrips */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
