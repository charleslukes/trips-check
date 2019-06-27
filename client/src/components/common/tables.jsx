import React from 'react';
import { Table } from 'reactstrap';

// to be generated dynamically
// this is a fake data.

function List() {
  return (
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>$3450</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>$1230</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>$900</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default List;
