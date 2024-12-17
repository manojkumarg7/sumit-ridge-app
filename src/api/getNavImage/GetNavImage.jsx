import React, { useEffect, useState } from "react";

const GetNavImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          "https://672dd775fd8979715643e967.mockapi.io/usertable"
        );
        const data = await response.json();
        console.log("Get Nav image");
        console.log(data.avatar);
        console.log(data);
        console.log("Get Nav image");

        setImageUrl(data.avatar);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>Get Image</h1>
      {imageUrl ? <img src={imageUrl} alt="Nav" /> : <p>Loading image...</p>}
    </div>
  );
};

export default GetNavImage;
