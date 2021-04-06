import React, { useState, useEffect } from "react";
// import * as api from "../api/";
import axios from "axios";

function WalletList() {
  //   const wallets = api.fetchWallets().then();
  const url = "http://localhost:5000/wallets";
  const [walletList, setWalletList] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setWalletList(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    // <div>{walletList}</div>
    <div>
      <ul>
        {walletList.map((wallet, index) => (
          <li key={index}>{wallet.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default WalletList;
