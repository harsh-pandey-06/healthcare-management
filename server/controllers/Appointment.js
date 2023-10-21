const Appointment = require("../models/appointment");
require("dotenv").config();

exports.createAppointment = async (req, res) => {
  try {
    const { patient, doctor, slot, symptoms, dateOfAppointment } = req.body;

    if (!patient || !doctor || !slot || !symptoms || !dateOfAppointment) {
      return res.status(200).send({
        success: false,
        message: "All Fields are required",
      });
    }

    const token_no = await Appointment.find({}).count();

    const appointment = await Appointment.create({
      patient,
      doctor,
      symptoms,
      slot,
      token_no,
      dateOfAppointment,
      status: "Pending",
    });

    return res.status(200).json({
      success: true,
      data: appointment,
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
    const patient = req.query.patientId;
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

exports.getAppointmentsByDoctorId = async (req, res) => {
  try {
    const doctor = req.query.doctorId;
    const appointmentDetails = await Appointment.find({ doctor });
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

exports.getTokenNo = async (req, res) => {
  try {
    const appointmentDetails = await Appointment.find();
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