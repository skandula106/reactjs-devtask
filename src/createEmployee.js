import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
class CreateEmployee extends React.Component {
  createEmployee = () => {
    let empInfo = {
      name: this.refs.fullname.value,
      emailId: this.refs.emailId.value,
      mobileNumber: this.refs.mobileNumber.value,
      address: this.refs.address.value,
    };
    console.log(empInfo);
    fetch("http://localhost:3004/employees", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(empInfo),
    }).then((r) =>
      r.json().then((res) => {
        if (res) {
          alert("Employee succesfull register with us");
        } else {
          alert("fail to save employee");
        }
      })
    );
  };
  render() {
    return (
      <div className="container">
        <br />
        <Card>
          <Card.Header>Create Employee</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicFullname">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    ref="fullname"
                    placeholder="Enter full name here"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <Form.Label>Email I'd</Form.Label>
                  <Form.Control
                    type="email"
                    ref="emailId"
                    placeholder="Enter email I'd here"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicMobileNumber">
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control
                    type="text"
                    ref="mobileNumber"
                    placeholder="Enter mobile number here"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter address here"
                    ref="address"
                  />
                </Form.Group>
              </Form.Row>
            </Form>
            <Button
              variant="primary"
              className="float-right"
              onClick={this.createEmployee}
            >
              Create Employee
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CreateEmployee;
