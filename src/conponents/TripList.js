import React, { useState } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  fetch('http://localhost:3000/trips')
    .then((response) => response.json())
    .then((json) => setTrips(json));

  return <div>TripList</div>;
};

export default TripList;
