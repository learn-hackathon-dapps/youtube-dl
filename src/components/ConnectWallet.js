import { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material';
const Web3 = require("web3");

const ConnectWallet = ({ disableButton ,setDisableButton}) => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [instruction, setInstruction] = useState("Waiting for connection with wallet...");

    const onClickConnect = async () => {
      try {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
      } catch (error) {
        setInstruction("Wallet connection denied, reload the page to try again.");
        return;
      }
      setInstruction("");
      setWalletConnected(true);
      setDisableButton(false);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    sx={{ m: 1}}
                    onClick={() => onClickConnect()}
                    >
                    Connect to Metamask Wallet
                </Button>
            </Grid>
        </Grid>
    )
}

export default ConnectWallet