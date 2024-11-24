import React, { useState } from "react";
import NavComp from "../../components/nav/NavComp";
import Footer from "../../components/footer/Footer";
import HomeTable from "../../components/HomeTable/HomeTable";
import "./home.css";
import Sidebar from "../../components/sidbar/Sidebar";
import GetData from "../../api/get/GetData";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MainChart from "../../components/chart/MainChart";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ---- modal box
  const handleClose = () => {
    setShow(false);
    setDeleteId(null); // Reset the delete ID when the modal is closed
  };

  const handleShow = (id) => {
    if (id !== "") {
      setDeleteId(id); // Store the ID of the item to be deleted
      setShow(true); // Show the modal
    }
  };

  const handleDataFetched = (fetchedData) => {
    setData(fetchedData);
  };

  const handleClickDelete = async () => {
    if (deleteId) {
      const url = `https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${deleteId}`;
      const response = await fetch(url, { method: "DELETE" });
      if (response.ok) {
        console.log(`Deleted item with id: ${deleteId}`);
        setData((prevData) => prevData.filter((item) => item.id !== deleteId));
      }
      handleClose(); // Close the modal after deletion
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
          <HomeTable data={data} handledeletefunction={handleShow} />
          <div className="pie-chart ">
            <MainChart />
          </div>
        </div>
      </div>
      <div
        className={`footer-component ${
          isSidebarVisible ? "visible" : "hidden"
        }`}
      >
        <Footer />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClickDelete}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
