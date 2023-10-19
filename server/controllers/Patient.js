const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require("dotenv").config();
const otpGenerator = require("otp-generator");
const Patient=require("../models/patient");
const OTP = require("../models/OTP");

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await Patient.findOne({ email })
    // to be used in case of signup
    console.log(email);
    // If user found with provided email
    if (checkUserPresent) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      })
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    })
    const result = await OTP.findOne({ otp: otp })
    console.log("Result is Generate OTP Func")
    console.log("OTP", otp)
    console.log("Result", result)
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      })
    }
    const otpPayload = { email, otp }
    const otpBody = await OTP.create(otpPayload)
    console.log("OTP Body", otpBody)
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ success: false, error: error.message })
  }
}

exports.signup = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        mobile,
        email,
        password,
        confirmPassword,
        rollno,
        address,
        gender,
        dateOfBirth,
        state,
        city,
        pincode,
        bloodGroup
      } = req.body
  
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !confirmPassword ||
        !mobile ||
        !rollno ||
        !gender ||
        !dateOfBirth ||
        !bloodGroup
      ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message:
            "Password and Confirm Password do not match. Please try again.",
        })
      }
  
      const existingUser = await Patient.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Patient account already exists with this email. Please sign in to continue.",
        })
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await Patient.create({
        firstName,
        lastName,
        email,
        mobile,
        rollno,
        address,
        gender,
        dateOfBirth,
        state,
        city,
        pincode,
        bloodGroup,
        password: hashedPassword,
      })
  
      return res.status(200).json({
        success: true,
        user,
        message: "Patient created successfully",
      })
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Patient account cannot be created. Please try again.",
      })
    }
  }
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Email: ",email);
      console.log("password: ",password);
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: `Please Fill up All the Required Fields`,
        })
      }
      // console.log("checking user exists");
      const user = await Patient.findOne({ email });
  
      if (!user) {
        return res.status(200).json({
          success: false,
          message: `Patient is not registered.`,
        })
      }
      // console.log("password match");
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { email: user.email, id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        )
        // console.log("check 3");
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        }
        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          message: `Patient Login Success`,
        })
      } else {
        return res.status(401).json({
          success: false,
          message: `Password is incorrect`,
        })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: `Login Failure. Please Try Again`,
      })
    }
  }

exports.updatePatient = async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      mobile = "",
      rollno="",
      gender ="",
      dateOfBirth="",
      state="",
      city="",
      pincode="",
      id
    } = req.body

    // Find the profile by id

    const patient = await Patient.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      mobile,
      rollno,
      gender ,
      dateOfBirth,
      state,
      city,
      pincode,
    })
    await patient.save()

    const PatientDetails = await Patient.findById(id)




    return res.json({
      success: true,
      message: "Profile updated successfully",
      PatientDetails,
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
      message: "Patient data fetched successfully",
      data: patientDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.deletePatientDetails = async (req, res) => {
  try {
    const id = req.body.id;
    const Patientdetails = await Patient.findById(id);
    if (!Patientdetails) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }
    await Patient.findByIdAndDelete(id);
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
      rollno,
      firstName,
      lastName,
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
      !rollno ||
      !firstName ||
      !lastName ||
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
      rollno,
      firstName,
      lastName,
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