const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  rollno: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    trim: true,
    require: true,
  },
  lastName: {
    type: String,
    trim: true,
    require: true,
  },
  gender: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "B+", "A-", "B-", "O+", "O-", "AB+", "AB-"],
    require: true,
  },
  dateOfBirth: {
    type: Date,
  },
  mobile: {
    type: Number,
    trim: true,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
);


module.exports = mongoose.model("Patient", patientSchema);
