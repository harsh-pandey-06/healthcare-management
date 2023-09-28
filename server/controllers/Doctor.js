const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
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