import React from "react";

const CheckEmail = async (email) => {
  try {
    const response = await fetch(
      "https://672dd775fd8979715643e967.mockapi.io/usertable"
    );
    const data = await response.json();
    console.log(data);
    const emailExists = data.some((user) => user.email === email);
    return emailExists;
  } catch (err) {
    console.error("Error checking email:", err);
    return false;
  }
};

export default CheckEmail;
