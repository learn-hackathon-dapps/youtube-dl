import { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material';

const dotenv = require("dotenv");
const Ytdl = require("./Ytdl");
const { web3 } = require("../../utils/ethereumAPI");

dotenv.config();
const videoContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = Ytdl.abi;
const contract = new web3.eth.Contract(Ytdl.abi, videoContractAddress)

const YtdlMainMenu = () => {
  const [youtubeAddress, setYoutubeAddress] = useState("");
  const downloadYoutubeVideo = async () => {
    console.log(">>> Downloading");
    console.log(contract);
    const video = await contract.methods.searchVideo("RickRoll").call();
    console.log(video);
    // 1. Check in web3 Storage
    //    --> if exist download from web3Storage
    //    --> else download from youtube and upload to web3Storage
    // const video = await ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
    //     .pipe(fs.createWriteStream('video.mp4'));
  }
  return (
    <Grid container spacing={2}>
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
            >
                Download Youtube Video
            </Button>
        </Grid>
    </Grid>
  )
}

export default YtdlMainMenu