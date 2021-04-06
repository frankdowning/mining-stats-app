import axios from "axios";

const url = "http://localhost:5000/wallets";

export const fetchWallets = () => axios.get(url);
