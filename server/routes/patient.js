const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  updatePatient,
  getAllPatients,
} = require("../controllers/Patient");

router.post("/login", login);
router.post("/signup", signup);
router.post("/update", updatePatient);
router.get("/fetchPatients", getAllPatients);
module.exports = router;
