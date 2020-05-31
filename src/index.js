import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Card } from "react-bootstrap";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="container">
        <br />
        <Card>
          <Card.Header as="h5">Employee Details</Card.Header>
          <Card.Body>
            <p>
              <label>
                Employee Id: <b>{this.props.id}</b>
              </label>
            </p>
            <p>
              <label>
                Employee name: <b>{this.props.name}</b>
              </label>
            </p>
            <p>
              <label>
                Employee email: <b>{this.props.email}</b>
              </label>
            </p>
            <p>
              <label>
                Employee mobile number: <b>{this.props.mobileNumber}</b>
              </label>
            </p>
            <EmployeeHigherEduDetails
              higherEdu={this.props.higherEdu}
              higherEduUniversity={this.props.higherEduUniversity}
            ></EmployeeHigherEduDetails>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
class EmployeeHigherEduDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee higher education details</h2>
        <p>
          <label>
            Employee Higher Education: <b>{this.props.higherEdu}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Higher Education university:
            <b>{this.props.higherEduUniversity}</b>
          </label>
        </p>
      </div>
    );
  }
}
const empDetails = (
  <Employee
    id="102"
    name="Kandula srinivasarao"
    email="cnuchowdary007@gmail.com"
    mobileNumber="8985310407"
    higherEdu="B.tech"
    higherEduUniversity="Giits"
  ></Employee>
);
ReactDOM.render(empDetails, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
