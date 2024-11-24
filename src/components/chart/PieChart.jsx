import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; //this

ChartJS.register(ArcElement, Tooltip, Legend); //this

const PieChart = ({ chartData }) => {
  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
