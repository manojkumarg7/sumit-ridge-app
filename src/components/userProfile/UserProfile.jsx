import React, { useState, useEffect } from "react";
import "./userprofileStyle.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const UserProfile = () => {
  const [image, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setDesignation(sessionStorage.getItem("designation"));
      setImageUrl(sessionStorage.getItem("image"));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      designation,
      email,
      image,
    };

    try {
      const response = await fetch(
        `https://672dd775fd8979715643e967.mockapi.io/usertable?email=${email}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const userId = data[0].id;

        const updateResponse = await fetch(
          `https://672dd775fd8979715643e967.mockapi.io/usertable/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (updateResponse.ok) {
          const updatedData = await updateResponse.json();
          console.log("User profile updated:", updatedData);
          alert("Profile updated successfully!");
        } else {
          console.error("Error updating profile:", updateResponse.statusText);
          alert("Error updating profile. Please try again.");
        }
      } else {
        const createResponse = await fetch(
          "https://672dd775fd8979715643e967.mockapi.io/usertable",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (createResponse.ok) {
          const newData = await createResponse.json();
          console.log("New user profile created:", newData);
          alert("Profile created successfully!");
        } else {
          console.error("Error creating profile:", createResponse.statusText);
          alert("Error creating profile. Please try again.");
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
    setImageUrl("");
  };

  return (
    <>
      <div className="user-profile-wrapper mt-3">
        <h5 className="ms-3">
          <Link to={"/sumit-ridge-app/home"} style={{ color: "brown" }}>
            <IoMdArrowRoundBack /> My Profile
          </Link>
        </h5>
        <Container fluid>
          <Row className="d-flex justify-content-between mt-2 mx-1">
            <Col md={12} className="user-profile-left py-3">
              <h5 className="fw-semibold">Profile</h5>
              <hr />

              <Avatar />
              <Form className="py-2" onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label className="user-profile-label">
                    User Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={username}
                    placeholder="User Name"
                    className="input-field w-50"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01" className="mt-2">
                  <Form.Label className="user-profile-label">
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="input-field w-50"
                    disabled
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02" className="mt-2">
                  <Form.Label className="user-profile-label">
                    Designation <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    value={designation}
                    type="text"
                    placeholder="Designation"
                    className="input-field w-50"
                    onChange={(e) => setDesignation(e.target.value)}
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
