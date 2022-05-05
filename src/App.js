import { useState, useEffect } from 'react'
import AppAuthenticated from "./components/AppAuthenticated"
import ConnectWallet from './components/ConnectWallet';
const Web3 = require("web3");

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [instruction, setInstruction] = useState("Waiting for connection with wallet...");

  // useEffect(() => {
  //   const connectWallet = async () => {
  //     if(!window.ethereum)
  //       return;
  //     try {
  //       await window.ethereum.send('eth_requestAccounts');
  //       window.web3 = new Web3(window.ethereum);
  //     } catch (error) {
  //       setInstruction("Wallet connection denied, reload the page to try again.");
  //       return;
  //     }
  //     setInstruction("");
  //     setWalletConnected(true);
  //   };
  //   connectWallet();
  // }, []);

  return (
    <div>
      <AppAuthenticated />
    </div>
  )
}

export default App
