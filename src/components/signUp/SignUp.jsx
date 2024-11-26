import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./signupStyle.css";
const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <div className="sign-up-wrapper">
        <h1 className="text-light">Sign Up</h1>
        <div className="sign-up-body">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername" className="mt-2">
                <Form.Label className="text-light">Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="validationCustomUsername" className="mt-2">
                <Form.Label className="text-light">Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                md="4"
                controlId="validationCustom02"
                className="mt-2"
              >
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="sign-up-btn w-100">
              Submit form
            </Button>
            <Button variant="dark" className="w-100 mt-3">
              Back to login
            </Button>
            {/* <Button variant="outline-secondary" className="w-100 mt-3">
              Secondary
            </Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
