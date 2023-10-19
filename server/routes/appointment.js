const express = require("express");
const router = express.Router();
const { createAppointment, getAppointmentDetails, getAllAppointments, getAppointmentsByPatientId } = require("../controllers/Appointment");

router.post("/create", createAppointment);
router.get("/get", getAppointmentDetails);
router.get("/getAllAppointments", getAllAppointments);
router.get("/getAppointmentsByPatientId", getAppointmentsByPatientId);

module.exports = router;
