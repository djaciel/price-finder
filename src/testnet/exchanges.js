const Utils = require('../Utils');
const PANCAKESWAP_ABI = require('./abis/PANCAKESWAP_ABI');
const PANCAKES2WAP_ABI = require('./abis/PANCAKESWAP2_ABI');
const BAKERYSWAP2_ABI = require('./abis/BAKERYSWAP2_ABI');

const exchanges = {
  PANCAKESWAP: Utils.createContract({
    name: 'PANCAKESWAP',
    router: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
    factory: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    abi: PANCAKESWAP_ABI,
  }),
  PANCAKES2WAP: Utils.createContract({
    name: 'PANCAKES2WAP',
    router: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    factory: '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc',
    abi: PANCAKES2WAP_ABI,
  }),
  BAKERYSWAP2: Utils.createContract({
    name: 'BAKERYSWAP2',
    router: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    factory: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    abi: BAKERYSWAP2_ABI,
  }),
};

module.exports = exchanges;
