import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../../assets/images/srf-favicon.png";
import avatar from "../../assets/images/profile-img.jpg";
import "./navbarStyle.css";
import "../../Styles/main.css";
import { BsList } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CiUser } from "react-icons/ci";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const NavComp = ({ setSidebarVisible }) => {
  const [isToggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!isToggle);
    setSidebarVisible(!isToggle);
  };

  const navigate = useNavigate();

  const handleUpdateNavigate = () => {
    navigate("/sumit-ridge-app/profile-page");
  };

  const handleNavigate = () => {
    navigate("/sumit-ridge-app/");
  };

  return (
    <div className="navbar-wrapper">
      <Navbar className="bg-light justify-content-between fixed-top">
        <div className="ps-md-4 ps-2 dif-flex">
          <img className="logo" src={bg} alt="background" />
          <BsList
            className="icons fs-2 ms-md-4 ms-1"
            // className="icons fs-md-2 fs-1 ms-md-4 ms-1"
            onClick={handleClick}
          />
        </div>
        <div className="dif-flex gap-3">
          <DropdownButton
            id="dropdown-basic-button"
            title={<BsBellFill className="icons fs-4" />}
            align="end"
          >
            <Dropdown.Item
              href="#/action-1"
              className="drop-down-items text-center text-wrap text-muted"
            >
              You have 4 notifications
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2" className="my-2">
              <div className="d-flex align-items-center">
                <IoAlertCircleOutline className="notification-icon text-warning me-3" />
                <div>
                  <h6 className="fw-semibold mb-1 text-wrap">Lorem Ipsum</h6>
                  <p className="text-muted text-wrap">
                    Quae dolorem earum veritatis oditseno 30 min. ago
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3" className="my-2">
              <div className="d-flex align-items-center">
                <MdOutlineCancel className="notification-icon text-danger me-3" />
                <div>
                  <h6 className="fw-semibold mb-1 text-wrap">
                    Atque rerum nesciunt
                  </h6>
                  <p className="text-muted text-wrap">
                    Quae dolorem earum veritatis oditseno 1 hr. ago{" "}
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-4"
              className="drop-down-items text-center text-wrap text-muted"
            >
              See all notifications{" "}
              <GrFormNextLink className="text-muted fs-3" />
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-basic-button"
            title={<BsBagCheckFill className="icons fs-4" />}
            align="end"
          >
            <Dropdown.Item
              href="#/action-1"
              className="drop-down-items text-center text-wrap text-muted"
            >
              You have 2 new Events{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2" className="my-2">
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="fw-semibold mb-1 text-wrap">Maria Hudson</h6>
                  <p className="text-muted text-wrap">
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut... 4 hrs. ago{" "}
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3" className="my-2">
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="fw-semibold mb-1 text-wrap">Anna Nelson </h6>
                  <p className="text-muted text-wrap">
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut... 6 hrs. ago{" "}
                  </p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-4"
              className="drop-down-items text-center text-wrap text-muted"
            >
              See all messages
              <GrFormNextLink className="text-muted fs-3" />
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-avatar-button"
            className="me-md-2 me-0"
            drop="down"
            variant="light"
            align={"end"}
            title={
              <div className="d-flex align-items-center">
                <img src={avatar} alt="User Avatar" className="avatar-img" />
                <h6 className="user-name ms-2 mb-0 d-md-block d-none fw-bold">
                  K.Anderson
                </h6>
                <FaSortDown className="icons fs-6 d-md-block d-none" />
              </div>
            }
          >
            <Dropdown.Item href="#/action-1" className="divider">
              <h5 className="text-center">Kevin Anderson</h5>
              <p className="text-center">Technician</p>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className="text-muted"
              onClick={handleUpdateNavigate}
            >
              <CiUser className="fs-5 me-2 text-primary" />
              My Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              as="button"
              className="text-muted"
              onClick={handleNavigate}
            >
              <LiaSignOutAltSolid className="fs-5 me-2 text-danger" />
              Signout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>
    </div>
  );
};

export default NavComp;
