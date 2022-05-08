import { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import ConnectWallet from '../ConnectWallet';

const dotenv = require("dotenv");
const Ytdl = require("./Ytdl");
const { web3 } = require("../../utils/ethereumAPI");

dotenv.config();
const videoContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = Ytdl.abi;
const contract = new web3.eth.Contract(Ytdl.abi, videoContractAddress)

const YtdlMainMenu = ({disableButton, setDisableButton}) => {
  const [youtubeAddress, setYoutubeAddress] = useState("");
  const downloadYoutubeVideo = async () => {
    console.log(">>> Downloading");
    const payload = JSON.stringify({url: youtubeAddress});
    const response = await fetch('/downloadYoutubeVideo', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: payload
    });
    const message = await response.json();
    console.log(message);
  }
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <ConnectWallet disableButton={disableButton} setDisableButton={setDisableButton}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" noWrap display="inline" component="div" sx={{ m: 1}}>
            Try this video: https://www.youtube.com/watch?v=cIMSurFsMG8
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Youtube Address"
                sx={{ m:1, width: '50ch'}}
                placeholder="0x"
                size="small"
                onChange={(e) => setYoutubeAddress(e.target.value)}
            />
            <Button
                variant="contained"
                sx={{ m: 1 }}
                onClick={() => downloadYoutubeVideo()}
                disabled={disableButton}
            >
                Download Youtube Video
            </Button>
        </Grid>
    </Grid>
  )
}

export default YtdlMainMenu