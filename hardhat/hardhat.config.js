require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
// dotenv.config({ path: __dirname + "/.env" });
dotenv.config();
// const { ALCHEMY_URL, MATIC_PRIVATE_KEY } = process.env;
// console.log(process.env.ALCHEMY_URL);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_URL,
            // url: "https://polygon-mumbai.g.alchemy.com/v2/T9DBRUi60EK_uopxNyuW-Cs9PzMLprqv",
            accounts: [`0x${process.env.MATIC_PRIVATE_KEY}`],
            // accounts: ['0xT9DBRUi60EK_uopxNyuW-Cs9PzMLprqv'],
        }, 
    },
    paths: {
        artifacts: "../frontend/src/artifacts",
    },
};
