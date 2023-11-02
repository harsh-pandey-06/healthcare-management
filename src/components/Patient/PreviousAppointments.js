import React, { useEffect } from 'react'
import { UserState } from '../../Context/UserProvider'
import axios from 'axios';

const PreviousAppointments = () => {
    const { user, getUserFromToken } = UserState();
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
        console.log(response);
     }

  return (
    <div>Hi Patient</div>
  )
}

export default PreviousAppointments