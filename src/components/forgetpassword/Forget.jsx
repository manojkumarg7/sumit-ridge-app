import React from "react";
import "./forgetpasswordStyle.css";
import "../../Styles/main.css";
import { GrFormPreviousLink } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <React.Fragment>
      <div className="forgetcomp-wrapper">
        <div className="forgetcomp-body rounded-3">
          <div>
            <Link to="/sumit-ridge-app/login">
              {" "}
              <GrFormPreviousLink className="h5 me-3 text-danger" />
            </Link>
            <span className="h5 fw-semibold">Reset your password</span>
          </div>
          <p className="forget-user-info">
            We will send you an email to reset your password
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mt-2 text-decoration-underline text-primary">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                size="sm"
                placeholder="Enter email"
                className="forget-comp-input"
              />
            </Form.Group>
            <Button
              type="submit"
              size="sm"
              className="forget-comp-icon border-0"
            >
              Email me
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forget;
