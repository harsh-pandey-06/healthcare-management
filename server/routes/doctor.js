const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  updateDoctor,
  deleteDoctorDetails,
} = require("../controllers/Doctor");

router.post("/login", login);
router.post("/signup", signup);
router.post("/update", updateDoctor);
router.delete("/delete", deleteDoctorDetails);

module.exports = router;
