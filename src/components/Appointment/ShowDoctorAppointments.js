import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import ListItem from './ListItem';
const ShowDoctorAppointments = () => {
    // const  user  = "651c160aecda86a6e5dc32ac";
      let user = JSON.parse(localStorage.getItem("userInfo"));
    const [appointment,setAppointment]=useState([]);
    console.log(user)
     const getAppointments = async () => {
       const toastId = toast.loading("Loading...");
       try {
         const response = await axios.get(
           `http://localhost:4000/api/v1/appointment/getAppointmentsByDoctorId`,
           { params: { id:user } }
         );
        //  res=response;
        setAppointment(response.data.data);
        console.log(appointment);
        toast.dismiss(toastId);
        toast.success("Appointments fetched succesfully");
       } catch (error) {
         toast.dismiss(toastId);
         toast.error("Server error. Please try again later");
         console.log("Error while checking availibility", error.message);
       }
     };
     useEffect(() => {
        console.log("function calle")
       getAppointments();
     },[]);
    
  return (
    <div>
        {
            appointment.map((data) => (
                <ListItem key={data._id} value={data} />
            ))
        }
    </div>
  )
}

export default ShowDoctorAppointments