import React, { useState, useEffect } from "react";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

function Wallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const client = createWalletClient({
        chain: mainnet,
        transport: custom(window.ethereum),
      });

      const [address] = await client.requestAddresses();
      setAccount(address);
    } else {
      alert("Install MetaMask");
    }
  };

  const disconnectWallet = async () => {
    setAccount(null);
  };

  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
    }
  }, []);

  return (
    <div>
      <p>Connected to: {account}</p>
      {account ? (
        <button type="button" className="mybutton button_fullcolor" onClick={disconnectWallet}>
          Disconnect Wallet
        </button>
      ) : (
        <button type="button" className="mybutton button_fullcolor" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default Wallet;
