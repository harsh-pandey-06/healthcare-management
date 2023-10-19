const Appointment = require("../models/appointment");
require("dotenv").config();

exports.createAppointment = async (req, res) => {
  try {
    const { patientId, symptopms, department } = req.body;

    if (!patientId || !symptopms || !department) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    const appointment = await Appointment.create({
      time: Date.now(),
      patient: patientId,
      symptopms,
      department,
      token_no: Math.random() * 100 + 100, // TODO: create an algo for token no
      status: "Pending",
    });

    return res.status(200).json({
      success: true,
      appointment,
      message: "Appointment created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Appointment cannot be created. Please try again.",
    });
  }
};
