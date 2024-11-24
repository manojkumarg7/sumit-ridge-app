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
import Modal from "react-bootstrap/Modal";

const NewComp = ({ dogId }) => {
  const [sex, setSex] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [color, setColor] = useState("");
  const [dateAccquired, setDateAccquired] = useState("");
  const [bowl, setBowl] = useState("Yes");
  const [status, setStatus] = useState("Active");
  const [dob, setDob] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const [errors, setErrors] = useState({
    sex: false,
    birthWeight: false,
    color: false,
    dateAccquired: false,
    dob: false,
  });

  const [shouldNavigate, setShouldNavigate] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    if (shouldNavigate) {
      navigate("/sumit-ridge-app");
    }
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (id) {
      fetch(`https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${id}`, {
        method: "PUT",
      })
        .then((response) => response.json())
        .then((data) => {
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

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleDateAcquiredChange = (e) => {
    setDateAccquired(e.target.value);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  const handleSubmit = async (event) => {
    let formErrors = { ...errors };

    formErrors.sex = sex === "";
    formErrors.dob = dob === "";
    formErrors.color = color === "";
    formErrors.birthWeight = birthWeight === "";
    formErrors.dateAccquired = dateAccquired === "";
    setErrors(formErrors);
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

          setShouldNavigate(true);

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
    }
  };

  return (
    <div>
      <div className="page-title d-flex align-items-center gap-2 ms-3">
        <Link to={"/sumit-ridge-app"}>
          <GrLinkPrevious className="fw-bold fs-5" />
        </Link>
        <h5 className="fw-semibold text-left my-3"> Add a New Animal</h5>
      </div>
      <div className="animal-container p-3">
        <Form onSubmit={handleSubmit}>
          <Container fluid>
            <Row className="mb-sm-2 mb-0">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <p className="mb-0 text-muted small fw-semibold">Animal Id</p>
                <Form.Control
                  type="text"
                  placeholder="Auto generate"
                  value={dogId}
                  disabled
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikSex">
                <Form.Label className="mb-0">
                  Sex <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Select Sex"
                  name="sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  isInvalid={errors.sex}
                  isValid={sex && !errors.sex}
                >
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.sex ? "This Field is Required" : ""}
                </Form.Control.Feedback>

                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label className="mb-0 text-muted small fw-semibold">
                  DOB <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  aria-label="Select Date of Birth"
                  value={dob}
                  onChange={handleDobChange}
                  isInvalid={errors.dob}
                  isValid={dob && !errors.dob}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.dob && "This Field is Required"}
                </Form.Control.Feedback>

                <Form.Control.Feedback type="valid">
                  Looks Good
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-sm-2 mb-0">
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label className="mb-0 text-muted small fw-semibold">
                  Birth Weight <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter text"
                  isInvalid={errors.birthWeight}
                  value={birthWeight}
                  isValid={birthWeight && !errors.birthWeight}
                  onChange={(e) => setBirthWeight(e.target.value)}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.birthWeight && "  This Field is Required"}
                </Form.Control.Feedback>

                <Form.Control.Feedback type="valid">
                  Looks Good
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label className="mb-0 text-muted small fw-semibold">
                  Color <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter text"
                  isInvalid={errors.color}
                  isValid={color && !errors.color}
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                {errors.color && (
                  <Form.Control.Feedback type="invalid">
                    This Field is Required
                  </Form.Control.Feedback>
                )}

                <Form.Control.Feedback type="valid">
                  Looks Good
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label className="mb-0 text-muted small fw-semibold">
                  Date Acquired <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter text"
                  isInvalid={errors.dateAccquired}
                  isValid={dateAccquired && !errors.dateAccquired}
                  value={dateAccquired}
                  onChange={handleDateAcquiredChange}
                  min={dob ? formatDate(dob) : undefined}
                />
                {errors.dateAccquired && (
                  <Form.Control.Feedback type="invalid">
                    This Field is Required
                  </Form.Control.Feedback>
                )}

                <Form.Control.Feedback type="valid">
                  Looks Good
                </Form.Control.Feedback>
              </Form.Group>
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
                      onChange={(e) => setBowl(e.target.value)}
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
                      onChange={(e) => setBowl(e.target.value)}
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
              <div className="col-md-4 col-sm-12">
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
                      onChange={(e) => setStatus(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btnradio2"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
            </Row>
            <div className="d-flex justify-content-between mt-4">
              <Link to={"/sumit-ridge-app"}>
                <Button
                  variant="light"
                  className="border-2 border-dark text-danger"
                >
                  Cancel
                </Button>
              </Link>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </div>
          </Container>
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: message ? "green" : "red" }}>
            {message ? "Success" : "Alert!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message
            ? "Animal Added Successfully"
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
