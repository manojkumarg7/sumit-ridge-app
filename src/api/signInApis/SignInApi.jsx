import React from "react";

const SignInApi = async (username, email, signPassword) => {
  try {
    const signInApiUrl =
      "https://672dd775fd8979715643e967.mockapi.io/usertable";

    const response = await fetch(signInApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: signPassword,
      }),
    });

    if (response.ok) {
      alert("Registerd data submitted SuccessFully");
      console.log("console message :Registerd data submitted SuccessFully");
      return response.json();
    } else {
      console.log("Error in posting Data");
    }
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default SignInApi;
