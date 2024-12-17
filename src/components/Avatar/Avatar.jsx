import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { FaCamera } from "react-icons/fa";
import axios from "axios";

const Avatar = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);

  const emailFromSession = sessionStorage.getItem("email");

  useEffect(() => {
    axios
      .get("https://672dd775fd8979715643e967.mockapi.io/usertable")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const user = data.find((user) => user.email === emailFromSession);

  const defaultImageFileName = "default.jpg";

  const userImageFileName =
    user && user.avatar ? user.avatar : defaultImageFileName;

  const userImage = userImageFileName.endsWith(".jpg")
    ? require(`../../assets/avatar/${userImageFileName}`)
    : require(`../../assets/avatar/${defaultImageFileName}`);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
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
          src={image || userImage}
          rounded
          width={100}
          height={100}
          style={{ border: "2px solid #A9A9A9" }}
          onClick={handleClickCameraIcon}
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
      </div>
    </div>
  );
};

export default Avatar;
