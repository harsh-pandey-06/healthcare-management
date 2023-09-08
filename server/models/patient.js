const mongoose = require("mongoose");


const patientSchema = new mongoose.Schema({
  patientId: {
    type: string,
    require: true,
  },
  firstname: {
    type: String,
    trim: true,
    require: true,
  },
  lastname: {
    type: String,
    trim: true,
    require: true,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
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
});


module.exports = mongoose.model("Patient", patientSchema);
