import React, { useEffect } from "react";

const GetSignInApi = ({ setUserData }) => {
  useEffect(() => {
    const getSignInUrl =
      "https://672dd775fd8979715643e967.mockapi.io/usertable";

    const fetchApi = async () => {
      try {
        const response = await fetch(getSignInUrl, { method: "GET" });
        if (!response.ok) {
          throw new Error("showing error");
        }
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();

    return () => {
      // Cleanup code here if needed (e.g., abort controller)
    };
  }, [setUserData]);

  return null;
};

export default GetSignInApi;
