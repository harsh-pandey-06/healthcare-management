const express = require("express");
const router = express.Router();
const { createAppointment, getAppointmentDetails, getAllAppointments, getAppointmentsByPatientId, getAppointmentsByDoctorId } = require("../controllers/Appointment");

router.post("/create", createAppointment);
router.get("/get", getAppointmentDetails);
router.get("/getAllAppointments", getAllAppointments);
router.get("/getAppointmentsByPatientId", getAppointmentsByPatientId);
router.get("/getAppointmentsByDoctorId", getAppointmentsByDoctorId);

module.exports = router;
