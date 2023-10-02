const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/Admin");
const { createDoctor } = require("../controllers/Doctor");

router.post("/login", login);
router.post("/signup", signup);
// router.post("/updateAdmin", updateAdmin);
router.post("/createDoctor",createDoctor);
module.exports = router;
