/** @type import('hardhat/config').HardhatUserConfig */
var secret = require("./secret");
require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');

module.exports = {
  etherscan: {
    apiKey: {
      polygon: secret.POLYGON_SCAN_KEY
    }
  },
  networks: {
    polygon: {
      // truffle deploy --network polygon
      url: `https://rpc-mainnet.maticvigil.com`,
      accounts: [secret.MMENOMIC],
      verify: {
        etherscan: {
          apiUrl: 'https://api.polygonscan.com'
        }
      }
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

