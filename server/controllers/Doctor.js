// const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
// const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Doctor=require("../models/doctor")
require("dotenv").config();




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


exports.getDoctorDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const doctorDetails = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Admin data fetched successfully",
      data: doctorDetails,
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
    const Doctordetails = await Doctor.findById({ _id: id });
    if (!Doctordetails) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    await Doctor.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Doctor data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createDoctor = async (req, res) => {
  try {
    // Get all required fields from request body
    const {
      doctorId,
      firstname,
      lastname,
      mobile,
      address,
      email,
      password
    } = req.body;

    // Check if any of the required fields are missing
    if (
      !doctorId ||
      !firstname ||
      !lastname ||
      !mobile ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: 'All Fields are Mandatory',
      });
    }

    // Create a new doctor with the given details
    const newDoctor = await Doctor.create({
      doctorId,
      firstname,
      lastname,
      mobile,
      address,
      email,
      password
    });

    // Return the new doctor and a success message
    res.status(200).json({
      success: true,
      data: newDoctor,
      message: 'Doctor Created Successfully',
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the doctor
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create Doctor',
      error: error.message,
    });
  }
};
