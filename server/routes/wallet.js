import express from "express";
import { getWallets, createWallet } from "../controllers/wallet.js";
const router = express.Router();

router.get("/", getWallets);
router.get("/", createWallet);

export default router;
