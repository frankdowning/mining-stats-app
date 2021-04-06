import mongoose from "mongoose";

const wallet = mongoose.Schema({
  address: String,
  coin: String,
  pool: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Wallet = mongoose.model("Wallet", wallet, "addresses");

export default Wallet;
