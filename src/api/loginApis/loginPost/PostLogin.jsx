import React from "react";

const PostLogin = async (email, password) => {
  try {
    const loginApiUrl = "https://672dd775fd8979715643e967.mockapi.io/login";
    const response = await fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      alert("data is submitted successfully");
      console.log("Login Data Posted Successfully");
      return response.json();
    } else {
      console.log("Error in posting login data");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default PostLogin;
