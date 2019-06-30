import React, { useState, useEffect } from 'react';
import './trips.css';

function Trips(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [tripInfo, setTripInfo] = useState({
    billedAmout: '',
    created: '',
    destination: '',
    driverID: '',
    isCash: '',
    pickup: '',
    tripID: '',
    user: '',
  });

  useEffect(() => {
    fetch(`/api/trip/${id}`)
      .then(data => data.json())
      .then(data => setTripInfo(data.data));
  }, []);

  return (
    <>
      <div className="tripsInfo">
        <div className="left-trip">
          <div className="left-image">
            <div className="hold-image">
              <img
                src="https://i.ya-webdesign.com/images/driver-vector-cartoon-8.png"
                alt="diver"
              />
            </div>
          </div>
          <div>
            <p>
              <span>Driver ID:</span>
              {tripInfo.driverID}
            </p>
          </div>
        </div>

        <div className="right-trip">
          <h1>TRIP DETAILS</h1>
          <p>
            <span>Customer's Name:</span>
            {tripInfo.user.name}{' '}
          </p>
          <p>
            <span>Customer's Gender:</span>
            {tripInfo.user.gender}{' '}
          </p>
          <p>
            <span>Customer's Company:</span>
            {tripInfo.user.company}{' '}
          </p>
          <p>
            <span>Customer's Email:</span>
            {tripInfo.user.email}{' '}
          </p>
          <p>
            <span>Customer's Phone:</span>
            {tripInfo.user.phone}{' '}
          </p>
          <p>
            <span>Customer's Location:</span>
            {tripInfo.pickup.address}{' '}
          </p>
          <p>
            <span>Customer's Destination:</span>
            {tripInfo.destination.address}{' '}
          </p>
          <p>
            <span>Customer's Bill:</span> N{tripInfo.billedAmount}{' '}
          </p>
          <p>
            <span>Customer's Paid Cash:</span> {tripInfo.isCash ? 'Yes' : 'No'}
          </p>
          <p>
            <span>Customer's Trip ID:</span> {tripInfo.tripID}{' '}
          </p>
        </div>
      </div>
    </>
  );
}
export default Trips;
