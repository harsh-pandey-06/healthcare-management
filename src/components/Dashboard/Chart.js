import React from "react";
import { PieChart, Pie } from "recharts";
import { VictoryPie } from "victory";

const Chart = () => {
  // Sample data
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <VictoryPie
      innerRadius={100}
      colorScale={["#1d4ed8", "#5b21b6", "#22d3ee", "#c7d2fe"]}
      data={[
        { x: "General", y: 35 },
        { x: "Gyno", y: 40 },
        { x: "ENT", y: 55 },
        { x: "Scans", y: 55 },
      ]}
    />
  );
};

export default Chart;
