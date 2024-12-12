import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import userImage from "../../assets/images/profile-img.jpg";
import { FaCamera } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Avatar = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);

        const imageData = {
          imageBase64: reader.result,
          fileName: file.name,
          fileSize: file.size,
        };

        const blob = new Blob([JSON.stringify(imageData)], {
          type: "application/json",
        });

        const downloadUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "data.json";
        link.click();

        URL.revokeObjectURL(downloadUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickCameraIcon = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div>
      <div className="user-avatar">
        <Image
          className="user-profile-image position-relative"
          src={require("../../assets/avatar/mani.jpg")}
          // src="../../assets/images/profile-img.jpg"
          // src="../../assets/avatar/arun.jpg"
          // src={image || userImage}
          rounded
          width={100}
          height={100}
          style={{ border: "2px solid #A9A9A9" }}
        />
        <div className="user-wrapper position-absolute bottom-0 start-0">
          <FaCamera
            className="user-icon fs-5"
            onClick={handleClickCameraIcon}
          />
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <Button
          style={{ background: "brown", color: "white" }}
          size="sm"
          className="mt-5 ms-2"
        >
          Update Image
        </Button>{" "}
      </div>
    </div>
  );
};

export default Avatar;
