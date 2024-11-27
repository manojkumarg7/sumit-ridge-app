import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./signupStyle.css";
import { Link } from "react-router-dom";
import PasswordInput from "../../utilities/passwordinput/PasswordInput";
const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const [signPassword, setSignPassword] = useState("");

  const handleChangePassword = (e) => {
    setSignPassword(e.target.value);
  };

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
                    Enter username
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="validationCustomUsername" className="mt-2">
                <Form.Label className="text-light">Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter Valid Email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Label className="text-light mt-2">Password</Form.Label>
              <PasswordInput
                password={signPassword}
                onChange={handleChangePassword}
                placeholder="Password"
              />
            </Row>
            <Button type="submit" className="sign-up-btn w-100">
              Submit
            </Button>
            <Link to="/sumit-ridge-app/login">
              <Button
                variant="outline-secondary"
                className="sign-in-login-btn w-100 mt-3 text-light border border-light"
              >
                Back to login
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
