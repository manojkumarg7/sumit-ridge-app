import React, { useState } from "react";
import GetData from "../../api/get/GetData";
import PieChart from "./PieChart";

const MainChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Gender Distribution",
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  });

  const handleDataFetched = (data) => {
    console.log("data is not coming");

    console.log("Fetched Data: ", data);
    console.log("data is not coming");
    const maleCount = data.filter((item) => item.sex === "Male").length;
    const femaleCount = data.filter((item) => item.sex === "Female").length;
    console.log(maleCount);

    setChartData({
      labels: ["Male", "Female"],
      datasets: [
        {
          label: "Gender Distribution",
          data: [maleCount, femaleCount],
          backgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    });
  };

  return (
    <div>
      <GetData onDataFetched={handleDataFetched} />
      <PieChart chartData={chartData} />
    </div>
  );
};

export default MainChart;
