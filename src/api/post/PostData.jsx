// import React, { useState } from "react";
// const PostData = ({ formData }) => {
//   React.useEffect(() => {
//     const postData = async () => {
//       try {
//         const response = await fetch(
//           "https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//           }
//         );

//         if (response.ok) {
//           console.log("Data posted successfully");
//         } else {
//           console.log("Error posting data");
//         }
//       } catch (error) {
//         console.error("Error posting data:", error);
//       }
//     };

//     if (formData) {
//       postData();
//     }
//   }, [formData]);

//   return null;
// };

// export default PostData;
