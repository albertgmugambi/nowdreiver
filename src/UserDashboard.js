// components/UserDashboard.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const UserDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore and set it in the state
    const fetchData = async () => {
      const snapshot = await firestore.collection('data').get();
      const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Driver's Name</th>
            <th>Date of Latest Trip</th>
            <th>Latest Trip Destination</th>
            <th>Total Number of Trips</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.driverName}</td>
              <td>{item.dateOfLatestTrip}</td>
              <td>{item.latestTripDestination}</td>
              <td>{item.totalNumberOfTrips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
