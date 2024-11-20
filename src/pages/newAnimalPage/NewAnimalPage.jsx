import React, { useState } from "react";
import NavComp from "../../components/nav/NavComp";
import Sidebar from "../../components/sidbar/Sidebar";
import NewComp from "../../components/newAnimal/NewComp";
import Footer from "../../components/footer/Footer";
import "./newAnimalpageStyle.css";
import "../Home/home.css";
import GetData from "../../api/get/GetData";
const NewAnimalPage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [dogId, setDogId] = useState(null);

  const handleDataFetched = (data) => {
    console.log("dog id data fetching", data);

    if (data && data.length > 0) {
      setDogId(data[data.length - 1].dogid);
    }
  };
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
          <GetData onDataFetched={handleDataFetched} />
          {dogId && <NewComp dogId={dogId} />}
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

export default NewAnimalPage;
