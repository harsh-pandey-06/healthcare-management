const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/Admin");

router.post("/login", login);
router.post("/signup", signup);
router.post("/updateAdmin", updateAdmin);
module.exports = router;
