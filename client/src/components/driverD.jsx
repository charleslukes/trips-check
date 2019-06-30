import React, { useState, useEffect } from 'react';
import './driverD.css';

function DriverDetails() {
  const [driverNames, setDriverName] = useState([]);
  const [driverInfo, setDriverInfo] = useState(0);

  useEffect(() => {
    fetch('/api/drivers')
      .then(data => data.json())
      .then(data => setDriverName(data.data));
  }, []);

  const handleClick = event => {
    let displayValue;
    const id = event.target.dataset.value;

    driverNames.forEach(elem => {
      if (elem.driverID === id) {
        displayValue = elem;
      }
    });

    setDriverInfo(displayValue);
  };

  return (
    <>
      <div className="showsDriver">
        <div className="driversName">
          {driverNames.map((elem, index) => (
            <div key={index} className="driverPerson">
              <p>{elem.name}</p>

              <button onClick={e => handleClick(e)} data-value={elem.driverID}>
                view
              </button>
            </div>
          ))}
        </div>

        <div className="showsDetails">
          {typeof driverInfo === 'object' && (
            <div>
              <h1>Driver Details</h1>
              <div className="details">
                <p>
                  <span>Name:</span> {driverInfo.name}
                </p>
                <p>
                  <span>Gender:</span> {driverInfo.gender}
                </p>
                <p>
                  <span>Address:</span> {driverInfo.address}
                </p>
                <p>
                  <span>Phone Num:</span> {driverInfo.phone}
                </p>
                <p>
                  <span>Email:</span> {driverInfo.email}
                </p>
                <p>
                  <span>ID:</span> {driverInfo.driverID}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DriverDetails;
