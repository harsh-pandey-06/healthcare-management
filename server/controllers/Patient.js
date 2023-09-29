const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config();
const Patient=require("../models/patient")


exports.updateAdmin = async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      mobile = "",
      id
    } = req.body

    // Find the profile by id
    const AdminDetails = await Admin.findById(id)

    const admin = await Admin.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      mobile
    })
    await admin.save()





    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedAdminDetails,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.getPatientDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const patientDetails = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Admin data fetched successfully",
      data: patientDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.deleteDoctorDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const Patientdetails = await Patient.findById({ _id: id });
    if (!Patientdetails) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    await Patient.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Patient data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};