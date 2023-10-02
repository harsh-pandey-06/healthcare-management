// const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
// const jwt = require("jsonwebtoken");
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

exports.createPatient = async (req, res) => {
  try {
    // Get user ID from request object
    // const userId = req.user.id;

    // Get all required fields from request body
    let {
      patientId,
      firstname,
      lastname,
      gender,
      dateOfBirth,
      mobile,
      address,
      state,
      city,
      pincode,
      email,
      password
    } = req.body;

    // Check if any of the required fields are missing
    if (
      !patientId ||
      !firstname ||
      !lastname ||
      !gender ||
      !dateOfBirth ||
      !mobile ||
      !address ||
      !state ||
      !city ||
      !pincode ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // Create a new patient with the given details
    const newPatient = await Patient.create({
      patientId,
      firstname,
      lastname,
      gender,
      dateOfBirth,
      mobile,
      address,
      state,
      city,
      pincode,
      email,
      password
    });

    // Return the new patient and a success message
    res.status(200).json({
      success: true,
      data: newPatient,
      message: "Patient Created Successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the patient
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create Patient",
      error: error.message,
    });
  }
};
