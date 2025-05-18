const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const { authenticate } = require("../middleware/authenticate");
const { validateTransaction } = require("../middleware/validation");
const { checkTransactionRate, checkLargeAmount } = require("../middleware/fraudDetection");

router.get("/api/wallet/balance", authenticate, walletController.getBalance);

router.post("/api/wallet/deposit",authenticate,validateTransaction,checkLargeAmount,walletController.deposit);

router.post("/api/wallet/withdraw",authenticate,validateTransaction,checkTransactionRate,checkLargeAmount,walletController.withdraw);

router.post("/api/wallet/transfer",authenticate,validateTransaction,checkTransactionRate,checkLargeAmount,walletController.transfer);

router.get("/api/wallet/transactions", authenticate, walletController.getTransactionHistory);

module.exports = router;
