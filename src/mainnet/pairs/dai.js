const dai = {
  PANCAKESWAP: new Set([
    'PANCAKESWAP-DAI-CAKE',
    'PANCAKESWAP-DAI-UST',
    'PANCAKESWAP-DAI-VAI',
    'PANCAKESWAP-DAI-BUSD',
    'PANCAKESWAP-DAI-USDC',
    'PANCAKESWAP-DAI-ADA',
    'PANCAKESWAP-DAI-DOT',
    'PANCAKESWAP-DAI-USDT',
    'PANCAKESWAP-DAI-BTCB',
  ]),
  APESWAP: new Set(['APESWAP-DAI-wBNB', 'APESWAP-DAI-BUSD', 'APESWAP-DAI-USDT']),
  JULSWAP: new Set(['JULSWAP-DAI-wBNB', 'JULSWAP-DAI-SYRUP']),
  BAKERYSWAP: new Set(['BAKERYSWAP-DAI-VAI', 'BAKERYSWAP-DAI-wBNB']),
  PANTHERSWAP: new Set(['PANTHERSWAP-DAI-wBNB', 'PANTHERSWAP-DAI-BUSD', 'PANTHERSWAP-DAI-USDT']),
};

module.exports = dai;
