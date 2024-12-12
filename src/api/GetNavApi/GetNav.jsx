import React, { useEffect } from "react";

const GetNav = () => {
  useEffect(() => {
    fetch("https://672dd775fd8979715643e967.mockapi.io/usertable")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("error fetching:", error);
      });
  }, []);
  return null;
};

export default GetNav;
