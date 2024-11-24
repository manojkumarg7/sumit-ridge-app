import React, { useState } from "react";
import GetData from "../../api/get/GetData"; // Import the GetData component
import PieChart from "./PieChart"; // Import the PieChart component

const MainChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Labels will be dynamically populated (Male, Female)
    datasets: [
      {
        label: "Gender Distribution",
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB"], // Color for Male and Female
      },
    ],
  });

  // Function to update chart data when the data is fetched
  const handleDataFetched = (data) => {
    console.log("data is not coming");

    console.log("Fetched Data: ", data);
    console.log("data is not coming");
    // Count the number of males and females
    const maleCount = data.filter((item) => item.sex === "Male").length;
    const femaleCount = data.filter((item) => item.sex === "Female").length;
    console.log(maleCount);

    // Update the chart data
    setChartData({
      labels: ["Male", "Female"], // Set the labels for the chart
      datasets: [
        {
          label: "Gender Distribution",
          data: [maleCount, femaleCount], // Set the data (maleCount, femaleCount)
          backgroundColor: ["#FF6384", "#36A2EB"], // Optional: Set specific colors for Male and Female
        },
      ],
    });
  };

  return (
    <div>
      {/* Fetch data using GetData and pass the handleDataFetched function */}
      <GetData onDataFetched={handleDataFetched} />
      {/* Render the PieChart with the dynamic data */}
      <PieChart chartData={chartData} />
    </div>
  );
};

export default MainChart;
