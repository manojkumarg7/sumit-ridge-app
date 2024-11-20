import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import footerimg from "../../assets/images/srf-favicon.png";
import "../../Styles/main.css";
const Footer = () => {
  return (
    <div className="border-1">
      <Navbar className="bg-body-tertiary justify-content-between px-3  border-top border-info">
        <Form inline>
          <img src={footerimg} alt="" className="logo" />
        </Form>
        <Form inline>
          <p className="text-info fs-6 fs-md-2 mb-0">
            ©2024 By Summit Ridge Farms
          </p>
        </Form>
      </Navbar>
    </div>
  );
};

export default Footer;
