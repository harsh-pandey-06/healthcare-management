const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  updateDoctor,
  deleteDoctorDetails,
  fetchAll,
  fetchByDept
} = require("../controllers/Doctor");

router.post("/login", login);
router.post("/signup", signup);
router.post("/update", updateDoctor);
router.delete("/delete", deleteDoctorDetails);
router.get("/fetchAll", fetchAll);
router.get("/fetchByDept", fetchByDept);

module.exports = router;
