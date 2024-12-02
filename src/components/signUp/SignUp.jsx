import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./signupStyle.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../utilities/passwordinput/PasswordInput";
import SignInApi from "../../api/signInApis/SignInApi";
import Modal from "react-bootstrap/Modal";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [signConfirmPassword, setSignConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

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
  const handleChangeConfirmPassword = (e) => {
    console.log(e.target.value);
    setSignConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", signPassword);
    console.log("Password:", signConfirmPassword);

    if (
      username === "" ||
      email === "" ||
      signPassword === "" ||
      signConfirmPassword === ""
    ) {
      setMessage("All fields are required");
      setShowModal(true);
    } else {
      const result = await SignInApi(
        username,
        email,
        signPassword,
        signConfirmPassword,
        setShowModal,
        setMessage
      );
      console.log("API result:", result);
      if (result) {
        setIsRegistered(true);
        setMessage("Registered successfully!");
        setShowModal(true);
        // navigate("/sumit-ridge-app");
      } else {
        setMessage("Registration failed. Please try again.");
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (isRegistered) {
      navigate("/sumit-ridge-app/home");
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
              <Form.Label className="text-light">Confirm password</Form.Label>
              <PasswordInput
                password={signConfirmPassword}
                onChange={handleChangeConfirmPassword}
                placeholder="Confirm password"
              />
            </Row>
            <Button
              type="submit"
              className="sign-up-btn w-100"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Link to="/sumit-ridge-app/">
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
