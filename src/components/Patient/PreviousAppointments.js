import React, { useEffect, useState } from 'react'
import { UserState } from '../../Context/UserProvider'
import axios from 'axios';
import ListItem from '../Appointment/ListItem';

function checkDate(allData) {
  return allData.dateOfAppointment <= Date.now();
}

const PreviousAppointments = () => {
    const { user, getUserFromToken } = UserState();
    const [appointmentData,setAppointmentData]=useState([]);
     useEffect(() => {
       if (!user) {
         getUserFromToken();
       }
     }, []);
     useEffect(() => {
       if (user) {
         allAppointments();
       }
     }, [user]);

    //  console.log(user);
     const allAppointments=async()=>{
        const response = await axios.get(
          `http://localhost:4000/api/v1/appointment/getAppointmentsByPatientId`,
          { params: { id: user.id } }
        );
        // console.log(response);
        const appdata = response.data.data;
        const filteredData= appdata.filter(checkDate);
        setAppointmentData(filteredData);
     }

  return (
    <div>
      {appointmentData.map((data) => (
        <ListItem key={data._id} value={data} />
      ))}
    </div>
  );
}

export default PreviousAppointments