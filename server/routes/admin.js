const express = require("express");
const router = express.Router();
const { login, signup, getAdminDetails } = require("../controllers/Admin");

router.post("/login", login);
router.post("/signup", signup);
<<<<<<< HEAD
router.post("/updateAdmin", updateAdmin);
=======
router.get("/fetchAdmin", getAdminDetails);

>>>>>>> 17dfdd4b8da5787c68f2ce00cd4bd1ae38296bd0
module.exports = router;
