import React, { useState } from "react";
import NavComp from "../../components/nav/NavComp";
import Sidebar from "../../components/sidbar/Sidebar";
import UserProfile from "../../components/userProfile/UserProfile";
import Footer from "../../components/footer/Footer";
const ProfilePage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  return (
    <div>
      <NavComp setSidebarVisible={setSidebarVisible} />
      <div className="main-page-wrapper">
        <div
          className={`side-bar-page-component ${
            isSidebarVisible ? "visible" : "hidden"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`main-page-component ${
            isSidebarVisible ? "visible" : "hidden"
          }`}
        >
          <UserProfile />
        </div>
      </div>
      <div
        className={`footer-component ${
          isSidebarVisible ? "visible" : "hidden"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
