import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalComp = ({ shows, onHide, handleClose }) => {
  return (
    <div>
      <Modal show={shows} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="success">Registered</Modal.Title>
        </Modal.Header>
        <Modal.Body>User Data Registered SuccessFully</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
