import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const PasswordInput = ({ password, onChange, placeholder = "password" }) => {
  const [eyeToggle, setEyeToggle] = useState(true);

  const handlePasswordToggle = () => {
    setEyeToggle(!eyeToggle);
  };
  return (
    <>
      <InputGroup className="mb-3 px-3">
        <Form.Control
          type={eyeToggle ? "password" : "text"}
          value={password}
          placeholder={placeholder}
          aria-label="Password"
          aria-describedby="basic-addon2"
          onChange={onChange}
          required
        />
        <InputGroup.Text id="basic-addon2" onClick={handlePasswordToggle}>
          {eyeToggle ? (
            <FaEyeSlash className="icon" />
          ) : (
            <FaEye className="icon" />
          )}
        </InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default PasswordInput;
