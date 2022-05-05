/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
dotenv.config();

const ALCHEMY_URL = process.env.REACT_APP_RINKEBY_RPC_URL != null ? process.env.REACT_APP_RINKEBY_RPC_URL: "";
const WALLET_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY != null ? process.env.REACT_APP_PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000";
const ETHERSCAN_KEY = process.env.REACT_APP_ETHERSCAN_KEY != null ? process.env.REACT_APP_ETHERSCAN_KEY : "";

module.exports = {
  solidity: "0.8.3",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: ALCHEMY_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
