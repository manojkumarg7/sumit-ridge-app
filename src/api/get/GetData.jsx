import React, { useEffect } from "react";

const GetData = ({ onDataFetched }) => {
  useEffect(() => {
    const apiurl = "https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs";
    fetch(apiurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data: get", data);
        onDataFetched(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return null;
};

export default GetData;
