import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginStyle.css";
import logow from "../../assets/images/srf-favicon.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import PasswordInput from "../../utilities/passwordinput/PasswordInput";
import GetSignInApi from "../../api/signInApis/GetSignInApi";
import Modal from "react-bootstrap/Modal";
import bcrypt from "bcryptjs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeToggle, setEyeToggle] = useState(true);
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordToggle = () => {
    setEyeToggle(!eyeToggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields should be filled");
      return;
    }

    const user = userData.find((user) => user.email === email);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("designation", user.designation);
        console.log("Login successful, user data: ", user);
        navigate("/sumit-ridge-app/home");
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  return (
    <React.Fragment>
      <GetSignInApi setUserData={setUserData} />
      <div className="login-wrapper">
        <div className="container w-100 h-100 d-md-flex justify-content-between align-items-center flex-wrap gap-0">
          <div className="left-content align-self-start">
            <h1 className="fw-bold pt-5 ps-5 ">
              Your Pet Deserves
              <br /> the Best...
            </h1>
          </div>
          <div className="login-body py-4">
            <div className="text-center">
              <img src={logow} alt="logo-image" />
              <p className="login-text fw-semibold">Login To Continue</p>
            </div>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <InputGroup className="mb-3 px-3">
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleEmailChange}
                  required
                />
              </InputGroup>
              <PasswordInput
                password={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <Button
                variant="primary"
                type="submit"
                className="form-btn ms-3 border-0"
              >
                Login
              </Button>
              <p className="text-center mt-3">
                <span className="login-info login-forget-text">
                  Don't have an account ?
                </span>
                <Link to={"/sumit-ridge-app/signup"}>
                  <span className="text-info text-decoration-underline ms-1">
                    Signup
                  </span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Invalid credentials !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter correct email & password</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Login;
