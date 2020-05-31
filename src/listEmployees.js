import React from "react";
import Table from "react-bootstrap/Table";
class ListEmployee extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Email i'd</th>
              <th>Mobile number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}

export default ListEmployee;
