import Wallet from "../models/wallet.js";

export const getWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find();

    console.log(wallets);

    res.status(200).json(wallets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createWallet = async (req, res) => {
  const wallet = req.body;

  const newWallet = new Wallet(wallet);

  try {
    await newWallet.save();
    res.status(201).json(newWallet);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
