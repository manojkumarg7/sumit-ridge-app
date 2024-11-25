import React from "react";
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
const Login = () => {
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

            <form action="" className="mt-5">
              <InputGroup className="mb-3 px-3">
                <InputGroup.Text id="basic-addon1">
                  <FaUser className="icon" />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3 px-3">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordFill className="icon" />{" "}
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">
                  <FaEye className="icon" />
                </InputGroup.Text>
              </InputGroup>
              <Button variant="primary" className="form-btn ms-3 border-0">
                Login
              </Button>
              <p className="text-center mt-3">
                <Link to="/sumit-ridge-app/forget">
                  <span className="login-info login-forget-text">
                    {" "}
                    Forgot password?
                  </span>{" "}
                </Link>
                <span className="text-primary text-decoration-underline">
                  Signup
                </span>
              </p>
              <p className="text-center mt-2">
                <Link to="/sumit-ridge-app">
                  <GrFormPreviousLink className="h5 me-3 text-danger text-center" />
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
