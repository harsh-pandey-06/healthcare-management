import React from "react";
import { useState } from "react";
import Card from "./Dashboard/Card";
import Reports from "./Dashboard/Reports";
import Chart from "./Dashboard/Chart";
import Appointment from "./Dashboard/Appointment";
const Dashboard = () => {
  const [Data, setData] = useState([]);
  return (
    <div className="bg-white  ml-10 border border-gray-300 ">
      <div className=" mb-20">
        <h1 className="font-bold text-black text-3xl font-semibold mb-2 ml-2">
          Good Morning!
        </h1>
        <p className=" font-extralight font-medium ml-2">
          Check the updates for today here...
        </p>
      </div>
      <div className=" flex mx-auto ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="flex mt-20 gap-10">
        <div className="flex-col w-1/4 w-30 font-bold text-black text-lg ml-1 shadow-lg">
          Department
          <div>
            <Chart></Chart>
          </div>
        </div>
        <div className="w-3/4 ml-1 pl-5 shadow-lg h-max pb-5">
          <div className="font-bold text-black text-lg ">
            Lab reports to be sent (5)
          </div>
          <div className="mt-5">
            <Reports></Reports>
            <Reports></Reports>
            <Reports></Reports>
            <Reports></Reports>
            <Reports></Reports>
            <Reports></Reports>
          </div>
        </div>
      </div>
      <div className="h-72 ml-1 pl-5 border mt-5 shadow-xl ">
        <div className="font-bold text-black text-lg ">Appointment Queue</div>
        <div className="mt-5">
          <Appointment></Appointment>
          <Appointment></Appointment>
          <Appointment></Appointment>
          <Appointment></Appointment>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
