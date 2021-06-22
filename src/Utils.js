const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');
require('dotenv').config();
const constants = require(process.env.ENV === 'production' ? './mainnet/constants' : './testnet/constants');
const web3 = new Web3(new HDWalletProvider(process.env.PRIVATE_KEY, constants.BSC_RPC));

class Utils {
  static getFloat(str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf('.') + val + 1);
    return Number(str);
  }

  static createContract(exchange) {
    const contract = new web3.eth.Contract(exchange.abi, exchange.router);
    return {
      ...exchange,
      contract,
    };
  }
}

module.exports = Utils;
