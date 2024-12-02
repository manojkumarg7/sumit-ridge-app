import React from "react";

const SignInApi = async (
  username,
  email,
  signPassword,
  signConfirmPassword,
  setShowModal,
  setMessage
) => {
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
        confirm: signConfirmPassword,
      }),
    });

    if (response.ok) {
      setMessage("Successfully signed in!");
      setShowModal(true);
      // alert("SuccessFully signIn");
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
