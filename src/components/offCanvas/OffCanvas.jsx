import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMdHome } from "react-icons/io";
import { FaCat } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiUserSearchFill } from "react-icons/ri";
import "./offCanvasStyle.css";
const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="off-canvas-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="off-canvas-body d-grid gap-4">
          <div className="off-canvas-active-icon-wrapper dif-flex flex-column">
            <IoMdHome className="fs-4" />
            <p className="off-canvas-icon-name">Home</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <IoLogoOctocat className="fs-4" />
            <p className="off-canvas-icon-name">Canine</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <FaCat className="fs-4" />
            <p className="off-canvas-icon-name">Feline</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <FaUserFriends className="fs-4" />
            <p className="off-canvas-icon-name">Clients</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column  ">
            <FaCalendarAlt className="fs-4" />
            <p className="off-canvas-icon-name">Schedule</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <MdAccessTimeFilled className="fs-4" />
            <p className="off-canvas-icon-name">Availability</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <BsBuildingsFill className="fs-4" />
            <p className="off-canvas-icon-name">Building Logs</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <TbReportSearch className="fs-4" />
            <p className="off-canvas-icon-name">Reports</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <IoFastFoodSharp className="fs-4" />{" "}
            <p className="off-canvas-icon-name">Food Log</p>
          </div>
          <div className="off-canvas-default-icon-wrapper dif-flex flex-column">
            <RiUserSearchFill className="fs-4" />
            <p className="off-canvas-icon-name">Requests</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas;
