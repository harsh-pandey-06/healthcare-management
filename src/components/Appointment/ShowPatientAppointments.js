import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
const ShowDoctorAppointments = (props) => {
  const { user } = props;
  const getAppointments = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/auth/appointment/getAppointmentsByPatientId`,
        { params: { user } }
      );

      // get doctor ids of particular dept
      console.log(response);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Server error. Please try again later");
      console.log("Error while checking availibility", error.message);
    }
  };
  return <div>
    hello patient
  </div>;
};

export default ShowDoctorAppointments;
