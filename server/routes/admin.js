const express = require("express");
const router = express.Router();
const { login, signup, getAdminDetails } = require("../controllers/Admin");

router.post("/login", login);
router.post("/signup", signup);
router.get("/fetchAdmin", getAdminDetails);

module.exports = router;
