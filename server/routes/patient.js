const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/Admin");
const {createPatient} = require("../controllers/Patient");

router.post("/login", login);
router.post("/signup", signup);
// router.post("/updateAdmin", updateAdmin);
router.post("/createPatient",createPatient);
module.exports = router;
