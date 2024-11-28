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
import SignInApi from "../../api/signInApis/SignInApi";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");

  const handleChangeUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    console.log(e.target.value);
    setSignPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", signPassword);

    if (username === "" || email === "" || signPassword === "") {
      alert("All fields are required");
    } else {
      const result = await SignInApi(username, email, signPassword);
      console.log("API result:", result);
      if (result) {
        setUsername("");
        setEmail("");
        setSignPassword("");
        console.log("Registered successfully:--", result);
      }
    }
  };

  return (
    <>
      <div className="sign-up-wrapper">
        <h1 className="text-light">Sign Up</h1>
        <div className="sign-up-body">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername" className="mt-2">
                <Form.Label className="text-light">Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    value={username}
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={handleChangeUsername}
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
                    value={email}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={handleChangeEmail}
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
