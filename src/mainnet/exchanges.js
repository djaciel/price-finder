const Utils = require('../Utils');
const PANCAKESWAP_ABI = require('./abis/PANCAKESWAP_ABI');
const APESWAP_ABI = require('./abis/APESWAP_ABI');
const JULSWAP_ABI = require('./abis/JULSWAP_ABI');
const BAKERYSWAP_ABI = require('./abis/BAKERYSWAP_ABI');
const PANTHERSWAP_ABI = require('./abis/PANTHERSWAP_ABI');

const exchanges = {
  PANCAKESWAP: Utils.createContract({
    name: 'PANCAKESWAP',
    router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    abi: PANCAKESWAP_ABI,
  }),
  APESWAP: Utils.createContract({
    name: 'APESWAP',
    router: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
    factory: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    abi: APESWAP_ABI,
  }),
  JULSWAP: Utils.createContract({
    name: 'JULSWAP',
    router: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    factory: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    abi: JULSWAP_ABI,
  }),
  BAKERYSWAP: Utils.createContract({
    name: 'BAKERYSWAP',
    router: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    factory: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    abi: BAKERYSWAP_ABI,
  }),
  PANTHERSWAP: Utils.createContract({
    name: 'PANTHERSWAP',
    router: '0x24f7C33ae5f77e2A9ECeed7EA858B4ca2fa1B7eC',
    factory: '0x670f55c6284c629c23baE99F585e3f17E8b9FC31',
    abi: PANTHERSWAP_ABI,
  }),
};

module.exports = exchanges;
