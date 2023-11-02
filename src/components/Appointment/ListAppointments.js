import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import ListItem from './ListItem';
import { UserState } from '../../Context/UserProvider';
import dayjs from 'dayjs';

const ListAppointments = () => {
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

      let appointmentByDate = [];

      const dateList = new Set();

      response.data.data.forEach(data => {
        dateList.add(data.dateOfAppointment.substr(0, 10));
      })

      Array.from(dateList).forEach((currDate) => {
        const currArr = response.data.data.filter(elem => {
          return elem.dateOfAppointment.substr(0, 10) === currDate;
        });
        appointmentByDate.push({
          title: currDate,
          value: currArr
        })
      })

      appointmentByDate.sort(function (a, b) {
        var keyA = new Date(a.title),
          keyB = new Date(b.title);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      console.log(appointmentByDate);
      setAppointment(appointmentByDate);
      toast.success("Appointments fetched succesfully");
    } catch (error) {
      toast.error("Server error. Please try again later");
      console.log("Error while fetching appointments", error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div>
      {
        appointment.map(data => (
          // console.log(data.title);
          <>
            <div className='font-bold text-xl mt-8'>Appointments on:  {dayjs(data.title).format('D MMM YYYY')}</div>
            {
              data.value.map((data) => (
                <ListItem key={data._id} value={data} />
              ))
            }
          </>
        ))
      }
    </div>
  )
}

export default ListAppointments;