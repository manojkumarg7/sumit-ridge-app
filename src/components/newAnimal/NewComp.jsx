import React, { useState, useEffect } from "react";
import "./newAnimalStyle.css";
import "../../Styles/main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrLinkPrevious } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostData from "../../api/post/PostData";
import Modal from "react-bootstrap/Modal";

const NewComp = ({ dogId }) => {
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [color, setColor] = useState("");
  const [dateAccquired, setDateAccquired] = useState("");
  const [bowl, setBowl] = useState("Yes");
  const [status, setStatus] = useState("Active");
  const [formData, setFormData] = useState(null);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${id}`, {
        method: "PUT",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(id + " id");
          console.log(data.dogid + " data.dogid");
          setSex(data.sex);
          setDob(data.dob);
          setBirthWeight(data.birthWeight);
          setColor(data.color);
          setDateAccquired(data.dateAccquired);
          setBowl(data.bowl);
          setStatus(data.status);
        })
        .catch((error) => {
          console.log("Error fetching Data " + error.message);
        });
    }
  }, [id]);

  const handleSexChange = (e) => {
    console.log(e.target.value);
    setSex(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
    console.log(e.target.value);
  };

  const handleBirthWeight = (e) => {
    console.log(e.target.value);
    setBirthWeight(e.target.value);
  };

  const handleColorChange = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const handleDateAccquired = (e) => {
    setDateAccquired(e.target.value);
    console.log(e.target.value);
  };

  const handleBowlChange = (event) => {
    setBowl(event.target.value);
    console.log("yes triggering");
  };

  const handleStatusChange = (event) => {
    console.log(status + " coming ");
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      sex === "" ||
      dob === "" ||
      birthWeight === "" ||
      color === "" ||
      dateAccquired === ""
    ) {
      setShow(true);
      setMessage(false);
    } else {
      console.log("Form is submitted with the following data:");
      console.log({
        sex,
        dob,
        birthWeight,
        color,
        dateAccquired,
        bowl,
        status,
      });

      const formData = {
        sex,
        dob,
        birthWeight,
        color,
        dateAccquired,
        bowl,
        status,
      };

      try {
        let response;
        if (id) {
          response = await fetch(
            `https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
        } else {
          // POST request to add a new dog
          response = await fetch(
            "https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
        }

        if (response.ok) {
          setShow(true);
          setMessage(true);

          setSex("");
          setDob("");
          setBirthWeight("");
          setColor("");
          setDateAccquired("");
          setBowl("");
          setStatus("");
        } else {
          alert("Failed to submit data");
        }
      } catch (error) {
        console.error("Error posting data:", error);
        alert("An error occurred. Please try again.");
      }
      setFormData(formData);
      setFormData("");
    }
  };

  return (
    <div>
      <div className="page-title d-flex align-items-center gap-2 ms-3">
        <Link to={"/"}>
          <GrLinkPrevious className="fw-bold fs-5" />
        </Link>
        <h5 className="fw-semibold text-left my-3"> Add a New Animal</h5>
      </div>
      <div className="animal-container p-3">
        <Container fluid>
          <Row className="mb-sm-2 mb-0">
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">Animal Id</p>
              <Form.Control
                type="text"
                placeholder="Auto generate"
                value={dogId}
                disabled
              />
            </Col>
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">
                Sex <span className="text-danger">*</span>
              </p>
              <Form.Select
                aria-label="Select Sex"
                value={sex}
                onChange={handleSexChange}
              >
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Col>
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">
                DOB<span className="text-danger">*</span>
              </p>
              <Form.Control
                type="date"
                placeholder="Enter text"
                value={dob}
                onChange={handleDobChange}
              />
            </Col>
          </Row>
          <Row className="mb-sm-2 mb-0">
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">
                Birth Weight <span className="text-danger">*</span>
              </p>
              <Form.Control
                type="text"
                placeholder="Enter text"
                value={birthWeight}
                onChange={handleBirthWeight}
              />
            </Col>
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">
                Color <span className="text-danger">*</span>
              </p>
              <Form.Control
                type="text"
                placeholder="Enter text"
                value={color}
                onChange={handleColorChange}
              />
            </Col>
            <Col md={4} className="mb-2">
              <p className="mb-0 text-muted small fw-semibold">
                Date Acquired <span className="text-danger">*</span>
              </p>
              <Form.Control
                type="date"
                placeholder="Enter text"
                value={dateAccquired}
                onChange={handleDateAccquired}
              />
            </Col>
          </Row>
          <Row className="mb-sm-2 mb-0">
            <div className="col-md-4 col-sm-12">
              <label className="form-label">Bowl</label>
              <div className="d-flex">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnbowlradio"
                    id="btnradio3"
                    autoComplete="off"
                    value="Yes"
                    checked={bowl === "Yes"}
                    onChange={handleBowlChange}
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio3"
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnbowlradio"
                    id="btnradio4"
                    autoComplete="off"
                    value="No"
                    checked={bowl === "No"}
                    onChange={handleBowlChange}
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio4"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 ">
              <label className="form-label">Status</label>
              <div className="d-flex">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    value="Active"
                    checked={status === "Active"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio1"
                  >
                    Active
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio2"
                  >
                    Inactive
                  </label>
                </div>
              </div>
            </div>{" "}
          </Row>
          <div className="d-flex justify-content-between mt-4">
            <Link to={"/"}>
              <Button
                variant="light"
                className="border-2 border-dark text-danger"
              >
                Cancel
              </Button>
            </Link>
            <Button variant="danger" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Container>
      </div>

      {/* If formData is set, render the PostData component */}
      {/* {formData && <PostData formData={formData} />} */}
      {/* {formData && <PostData formData={formData} />} */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: message ? "green" : "red" }}>
            {message ? "Successs" : "Alert !"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message
            ? "Animal Added SuccessFully"
            : "All fields are required! Please fill in all the details"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewComp;
