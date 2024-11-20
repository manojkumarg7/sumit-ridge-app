import React from "react";
import HomeTable from "../../components/HomeTable/HomeTable";

const DeleteData = () => {
  const handleClickDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to Delete ?");

    if (isConfirmed) {
      const url = `https://673b3047339a4ce4451b092b.mockapi.io/ridge/dogs/${id}`;
      const response = await fetch(url, { method: "DELETE" });
      if (response.ok) {
        console.log(id);
        console.log(url);
      }
    }
  };
  return (
    <div>
      <h1>Delete Data</h1>
      {/* <HomeTable handledeletefunction={handleClickDelete} /> */}
    </div>
  );
};

export default DeleteData;
