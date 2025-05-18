const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const {validateRegistration} = require("../middleware/validation");

router.post("/api/auth/register", validateRegistration, authController.register);

router.post("/api/auth/login",authController.login);

module.exports = router;