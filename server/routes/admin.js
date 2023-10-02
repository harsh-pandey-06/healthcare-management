const express = require("express");
const router = express.Router();
const { login, signup, getAdminDetails } = require("../controllers/Admin");
const {createAdmin} = require("../controllers/Admin");

router.post("/login", login);
router.post("/signup", signup);
// router.post("/updateAdmin", updateAdmin);
router.get("/fetchAdmin", getAdminDetails);
router.post("/createAdmin",createAdmin);

module.exports = router;
