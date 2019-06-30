import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

function List() {
  const [table, updateTable] = useState([]);
  const [driverId, updateDriver] = useState([]);

  useEffect(() => {
    fetch('/api/trips')
      .then(data => data.json())
      .then(data => updateTable(data.data));
  }, []);

  useEffect(() => {
    fetch('/api/drivers')
      .then(data => data.json())
      .then(data => updateDriver(data.data));
  }, []);

  const getDriver = x => {
    return driverId.find(elem => {
      if (elem.driverID === x) {
        return elem.name;
      }
    });
  };

  return (
    <div className="t-body">
      <Table>
        <thead className="t-head">
          <tr>
            <th>#</th>
            <th>info</th>
            <th>user</th>
            <th>driver</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {table.map((elem, index) => {
            const name = () => {
              try {
                return getDriver(elem.driverID).name;
              } catch (error) {
                return 'not found';
              }
            };
            return (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <th>
                  <Link to={`/trip/${elem.tripID}`}>
                    <i className={`fas fa-info-circle`} />
                  </Link>
                </th>
                <td>{elem.user.name}</td>
                <td>{name()}</td>
                <td>N{elem.billedAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
