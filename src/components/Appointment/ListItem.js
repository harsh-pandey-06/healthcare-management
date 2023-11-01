import React from "react";

const ListItem = (props) => {
  const { value } = props;
  console.log(value)
  return (
    <div className="w-full shadow-xl p-5 rounded-lg">
      <div>
        <span className="text-lg font-medium">Name: </span>{value.patient.firstName + " " + value.patient.lastName}
      </div>
      <div>
        <span className="text-lg font-medium">Patient Id: </span>{value.patient.rollno}
      </div>
      <div>
        <span className="text-lg font-medium">Preferred slot: </span>{value.slot}
      </div>
      <div>
        <span className="text-lg font-medium">Department: </span>{value.department ?? "Not specified"}
      </div>
      <div>
        <span className="text-lg font-medium">Reason: </span>
        {value.symptoms}
      </div>
    </div>
  );
};

export default ListItem;
