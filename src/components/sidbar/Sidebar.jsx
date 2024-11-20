import React from "react";
import "./sidebar.css";
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
const Sidebar = () => {
  return (
    <div>
      <div className="side-bar-wrapper ">
        <div className="side-bar d-grid gap-4">
          <div className="side-bar-active-icon-container dif-flex flex-column">
            <IoMdHome className="fs-4" />
            <p className="side-bar-icon-name">Home</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <IoLogoOctocat className="fs-4" />
            <p className="side-bar-icon-name">Canine</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <FaCat className="fs-4" />
            <p className="side-bar-icon-name">Feline</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <FaUserFriends className="fs-4" />
            <p className="side-bar-icon-name">Clients</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <FaCalendarAlt className="fs-4" />
            <p className="side-bar-icon-name">Schedule</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <MdAccessTimeFilled className="fs-4" />
            <p className="side-bar-icon-name">Availability</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <BsBuildingsFill className="fs-4" />
            <p className="side-bar-icon-name">Building Logs</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <TbReportSearch className="fs-4" />
            <p className="side-bar-icon-name">Reports</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <IoFastFoodSharp className="fs-4" />{" "}
            <p className="side-bar-icon-name">Food Log</p>
          </div>
          <div className="side-bar-default-icon-container dif-flex flex-column">
            <RiUserSearchFill className="fs-4" />
            <p className="side-bar-icon-name">Requests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
