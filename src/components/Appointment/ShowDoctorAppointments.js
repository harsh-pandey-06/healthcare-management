import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import ListItem from './ListItem';
import { UserState } from '../../Context/UserProvider';

const ShowDoctorAppointments = () => {
  const [appointment, setAppointment] = useState([]);
  const { user, getUserFromToken } = UserState();

  useEffect(() => {
    if (!user) {
      getUserFromToken();
    }
  }, [])

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);



  const fetchData = async () => {
    const toastId = toast.loading("Loading...");
    console.log("Fetch data called");
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/appointment/${user.role === "doctor" ? "getAppointmentsByDoctorId" : "getAppointmentsByPatientId"}`,
        { params: { id: user.id } }
      );

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