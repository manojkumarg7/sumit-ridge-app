import React from "react";
import "./userprofileStyle.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import userImage from "../../assets/images/profile-img.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const UserProfile = () => {
  return (
    <>
      <div className="user-profile-wrapper">
        <div className="user-profile-container">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={userImage} roundedCircle />
              </Col>
            </Row>
          </Container>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Upload avatar</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          <Form>
            <Form.Group controlId="validationCustom01">
              <Form.Label className="user-profile-label">User name</Form.Label>
              <Form.Control required type="text" placeholder="User Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Label className="user-profile-label">Email</Form.Label>
              <Form.Control required type="email" placeholder="Email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Label className="user-profile-label">Password</Form.Label>
            <InputGroup>
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
            <Form.Label className="user-profile-label">
              Confirm password
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">
                <FaEye className="icon" />
              </InputGroup.Text>
            </InputGroup>

            <Button className="user-profile-btn w-100 mt-3" size="md" active>
              Button
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
