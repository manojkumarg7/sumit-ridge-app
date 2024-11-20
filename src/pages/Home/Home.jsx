import React, { useState } from "react";
import NavComp from "../../components/nav/NavComp";
import Footer from "../../components/footer/Footer";
import HomeTable from "../../components/HomeTable/HomeTable";
import "./home.css";
import Sidebar from "../../components/sidbar/Sidebar";
import GetData from "../../api/get/GetData";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  const handleClickDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to Delete?");
    if (isConfirmed) {
      const url = `https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${id}`;
      const response = await fetch(url, { method: "DELETE" });
      if (response.ok) {
        console.log(`Deleted item with id: ${id}`);
        setData((prevData) => prevData.filter((item) => item.id !== id));
      }
    }
  };

  return (
    <div>
      <NavComp setSidebarVisible={setSidebarVisible} />
      <div className="main-wrapper">
        <div
          className={`side-bar-component ${
            isSidebarVisible ? "visible" : "hidden"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`main-component ${
            isSidebarVisible ? "visible" : "hidden"
          }`}
        >
          <GetData onDataFetched={handleDataFetched} />
          <HomeTable data={data} handledeletefunction={handleClickDelete} />
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

export default Home;
