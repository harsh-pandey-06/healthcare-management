const express = require("express");
const router = express.Router();
const { createAppointment } = require("../controllers/Appointment");

router.post("/create", createAppointment);

module.exports = router;
