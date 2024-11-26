import React, { useState } from "react";
import "./loginStyle.css";
import logow from "../../assets/images/srf-favicon.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import { FaEyeSlash } from "react-icons/fa";
import PostLogin from "../../api/loginApis/loginPost/PostLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeToggle, setEyeToggle] = useState(true);

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

    if (!email && !password) {
      alert("fields should required");
    } else {
      const result = await PostLogin(email, password);
      if (result) {
        setEmail("");
        setPassword("");
        console.log("Login successful, user data: ", result);
      }
    }
  };

  return (
    <React.Fragment>
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
                {/* <InputGroup.Text id="basic-addon1">
                  <FaUser className="icon" />
                </InputGroup.Text> */}
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleEmailChange}
                />
              </InputGroup>
              <InputGroup className="mb-3 px-3">
                <Form.Control
                  type={eyeToggle ? "password" : "text"}
                  value={password}
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  onChange={handlePasswordChange}
                />
                <InputGroup.Text
                  id="basic-addon2"
                  onClick={handlePasswordToggle}
                >
                  {eyeToggle ? (
                    <FaEyeSlash className="icon" />
                  ) : (
                    <FaEye className="icon" />
                  )}
                </InputGroup.Text>
              </InputGroup>
              <Button
                variant="primary"
                type="submit"
                className="form-btn ms-3 border-0"
              >
                Login
              </Button>
              <p className="text-center mt-3">
                <Link to={"/sumit-ridge-app/signup"}>
                  <span className="text-primary text-decoration-underline">
                    Signup
                  </span>
                </Link>
                {/* <Link to="/sumit-ridge-app/forget">
                  <span className="login-info login-forget-text">
                    Forgot password?
                  </span>
                </Link> */}
              </p>
              {/* <p className="text-center mt-2">
                <Link to="/sumit-ridge-app">
                  <GrFormPreviousLink className="h5 me-3 text-danger text-center" />
                </Link>
              </p> */}
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
