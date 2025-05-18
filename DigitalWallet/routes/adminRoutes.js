const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authenticate, isAdmin } = require("../middleware/authenticate");

router.get("/api/admin/flaggedtransactions", authenticate, isAdmin, adminController.getFlaggedTransactions);

router.get("/api/admin/top-users/balance", authenticate, isAdmin, adminController.getTopUsersByBalance);

router.get("/api/admin/top-users/volume", authenticate, isAdmin, adminController.getTopUsersByVolume);

module.exports = router;