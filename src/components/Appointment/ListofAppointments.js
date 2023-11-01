import React from 'react'
import ShowDoctorAppointments from './ShowDoctorAppointments'
import ShowPatientAppointments from "./ShowPatientAppointments";
const ListofAppointments = () => {
    // const {role,user}=props;
    // console.log(role);
  return (
    <div>
        <ShowDoctorAppointments/>
        {/* {role=="patient" && <ShowPatientAppointments user={user}/>} */}
    </div>
  )
}

export default ListofAppointments