import React, { useState } from "react";
import "./userprofileStyle.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import userImage from "../../assets/images/profile-img.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordInput from "../../utilities/passwordinput/PasswordInput";
import { FaCamera } from "react-icons/fa";

const UserProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChnage = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // This will set the image as the source for the avatar
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickCameraIcon = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div className="user-profile-wrapper mt-3">
        <h5 className="ms-3" style={{ color: "brown" }}>
          My Profile
        </h5>
        <Container fluid>
          <Row className="d-flex justify-content-between mt-2 mx-1">
            <Col md={6} className="user-profile-left py-3">
              <h5 className="fw-semibold">Profile</h5>
              <hr />
              <div className="user-avatar">
                <Image
                  className="user-profile-image position-relative"
                  src={image || userImage}
                  rounded
                  width={100}
                  height={100}
                />

                <div className="user-wrapper position-absolute bottom-0 start-0">
                  <FaCamera
                    className="user-icon fs-5"
                    onClick={handleClickCameraIcon}
                  />
                </div>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
              <Form className="py-2">
                <Form.Group controlId="validationCustom01">
                  <Form.Label className="user-profile-label">
                    User Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="User Name"
                    className="input-field"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01" className="mt-2">
                  <Form.Label className="user-profile-label">
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    disabled
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button
                  type="submit"
                  className="user-profile-btn mt-3"
                  size="md"
                  active
                >
                  Save
                </Button>
              </Form>
            </Col>
            {/* ------------- */}
            <Col
              md={5}
              className="user-profile-right pt-3 pb-3 me-5 mt-md-0 mt-3"
            >
              <h5 className="ms-3 fw-semibold">Change password</h5>
              <hr />
              <Form>
                <Form.Group
                  controlId="validationCustom01"
                  className="user-profile-card"
                >
                  <Form.Label className="user-profile-label ms-3">
                    Password <span className="text-danger">*</span>
                  </Form.Label>
                  <PasswordInput
                    password={password}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01" className="mt-2">
                  <Form.Label className="user-profile-label ms-3">
                    Confirm password <span className="text-danger">*</span>
                  </Form.Label>
                  <PasswordInput
                    password={confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleConfirmPasswordChnage}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button
                  type="submit"
                  className="user-profile-btn mt-3"
                  size="md"
                  active
                >
                  Save
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
