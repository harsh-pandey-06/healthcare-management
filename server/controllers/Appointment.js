const Appointment = require("../models/appointment");
const Doctor = require("../models/doctor");
const mongoose = require("mongoose");
require("dotenv").config();

exports.createAppointment = async (req, res) => {
  try {
    const { patient, department, slot, symptoms, dateOfAppointment } = req.body;

    if (!patient || !department || !slot || !symptoms || !dateOfAppointment) {
      return res.status(200).send({
        success: false,
        message: "All Fields are required",
      });
    }

    const session = await mongoose.startSession();
    const transactionOptions = {
      readPreference: 'primary',
      readConcern: { level: 'local' },
      writeConcern: { w: 'majority' }
    };
    let appointment;

    try {
      await session.withTransaction(async () => {

        let assignedDoctor = [];
        try {
          const doctorDetails = await Doctor.find({ department });
          const ids = doctorDetails.map(doc => doc._id);

          await Promise.all(ids.map(async (doctorId) => {
            const appointments = await Appointment.find({ doctor: doctorId, dateOfAppointment });
            let count = 0;
            appointments.forEach(data => {
              if (data.slot === slot)
                count++;
            })
            if (count < 4) {
              assignedDoctor.push({ count, doctorId });
            }
          }));
        }
        catch (error) {
          console.error(error.message);
          return res.status(500).json({
            success: false,
            message: "Appointment cannot be created. Please try again.",
          });
        }

        if (assignedDoctor.length === 0) {
          return res.status(200).json({
            success: false,
            message: "No slots left. Please book a different slot",
          });
        }

        const token_no = await Appointment.find({}).count();
        const doctor = assignedDoctor.sort((a, b) => a.count - b.count)[0].doctorId;

        appointment = await Appointment.create({
          patient,
          doctor,
          symptoms,
          slot,
          token_no,
          dateOfAppointment,
          status: "Approved",
        });
      }, transactionOptions);

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
    } finally {
      await session.endSession();
    }
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
    const appointmentDetails = await Appointment.find({ doctor })
      .populate("patient")
      .exec();
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