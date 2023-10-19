const mongoose = require("mongoose");

// Define the Profile schema
const appointmentSchema = new mongoose.Schema({
  // rollno: {
  //   type: String,
  //   required: true,
  // },
  // firstName: {
  //   type: String,
  //   trim: true,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   trim: true,
  //   required: true,
  // },
  time: {
    type: Date,
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Doctor",
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Patient",
  },
  symptopms: {
    type: String,
    required: true,
  },
  token_no: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Cancelled", "Closed"],
    default: "Pending",
  },
  department:{
    type:String,
    required: true,
  }
},
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", appointmentSchema);
