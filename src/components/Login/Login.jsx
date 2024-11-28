import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginStyle.css";
import logow from "../../assets/images/srf-favicon.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import PasswordInput from "../../utilities/passwordinput/PasswordInput";
import GetSignInApi from "../../api/signInApis/GetSignInApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeToggle, setEyeToggle] = useState(true);
  const [userData, setUserData] = useState([]); // Store user data from API
  const navigate = useNavigate(); // Hook to navigate after successful login

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordToggle = () => {
    setEyeToggle(!eyeToggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields should be filled");
      return;
    }

    // Check if user exists with the correct email and password
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Login successful, user data: ", user);
      // Navigate to dashboard if credentials are correct
      navigate("/sumit-ridge-app");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <React.Fragment>
      <GetSignInApi setUserData={setUserData} />{" "}
      {/* Fetch user data on component mount */}
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
                <Link to={"/signup"}>
                  <span className="text-info text-decoration-underline ms-1">
                    Signup
                  </span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
