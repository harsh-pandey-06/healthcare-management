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
      token_no: Math.round(Math.random() * 100 + 100), // TODO: create an algo for token no
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

exports.getAppointmentDetails = async (req, res) => {
  try {
    const id = req.body.id;
    const appointmentDetails = await Appointment.findById(id).populate("patient").exec();
    res.status(200).json({
      success: true,
      message: "Appointment data fetched successfully",
      data: appointmentDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAppointmentsByPatientId = async (req, res) => {
  try {
    const patient = req.body.patientId;
    const appointmentDetails = await Appointment.find({ patient });
    res.status(200).json({
      success: true,
      message: "Appointment data fetched successfully",
      data: appointmentDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointmentDetails = await Appointment.find().populate("patient").exec();
    res.status(200).json({
      success: true,
      message: "Appointment data fetched successfully",
      data: appointmentDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};