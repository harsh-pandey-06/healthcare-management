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
      // radius={2000}
      // width={10000}
      // height={10000}
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
        { x: "Birds", y: 55 },
        { x: "Birds", y: 55 },
      ]}
    />
  );
};

export default Chart;
