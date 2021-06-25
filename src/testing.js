const PriceFinder = require('./PriceFinder');
const tokens = require('./mainnet/tokens');
const exchanges = require('./mainnet/exchanges');
const pairs = require('./mainnet/pairs/pairs');

// async function prueba() {
//   let price = await PriceFinder.getPrice(
//     exchanges.PANCAKESWAP,
//     tokens.wbnb,
//     tokens.busd,
//     '1000000000000000000',
//     false
//   );
//   console.log(price);
// }

// prueba();

//----------------------------------------------------------------

// async function prueba2() {
//   await PriceFinder.getTokenPairByExchange(exchanges.PANCAKESWAP, tokens.doge);
//   await PriceFinder.getTokenPairByExchange(exchanges.APESWAP, tokens.doge);
//   await PriceFinder.getTokenPairByExchange(exchanges.JULSWAP, tokens.doge);
//   await PriceFinder.getTokenPairByExchange(exchanges.BAKERYSWAP, tokens.doge);
//   await PriceFinder.getTokenPairByExchange(exchanges.PANTHERSWAP, tokens.doge);
// }

// prueba2();

// async function prueba3() {
//   try {
//     const res = await PriceFinder.getTokenPairPriceInExchanges(
//       exchanges.PANCAKESWAP,
//       'wbnb',
//       'bOPEN',
//       '1000000000000000000',
//       false
//     );

//     console.log('res', res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// prueba3();

// const tokensArr = ['busd', 'eth', 'bOPEN', 'swingby'];
// async function prueba4() {
//   const promises = tokensArr.map(async (token) => {
//     try {
//       const price = await PriceFinder.getTokenPairPriceInExchanges(
//         exchanges.PANCAKESWAP,
//         'wbnb',
//         token,
//         '1000000000000000000',
//         false
//       );
//       return price;
//     } catch (error) {
//       return undefined;
//     }
//   });

//   const tokenPrices = await Promise.all(promises);
//   console.log(tokenPrices);
// }

// prueba4();

//const amount = '1' + '000000000000000000';
// const amount = '100' + '000000000000000';

// async function prueba5() {
//   const promises = Object.keys(pairs).map(async (pair) => {
//     try {
//       const pricePair = await PriceFinder.getAllTokenPricesInExchanges(exchanges.APESWAP, pair, amount, true);

//       return pricePair;
//     } catch (error) {
//       return undefined;
//     }
//   });

//   const tokenPrices = await Promise.all(promises);
// }

// prueba5();

//const amount = '1' + '000000000000000000';
const amount = '10000' + '000000000000000';

async function prueba6() {
  const promises = Object.keys(pairs).map(async (pair) => {
    try {
      const pricePair = await PriceFinder.getAllBuySellTokenPricesInExchanges(
        exchanges.PANCAKESWAP,
        pair,
        amount,
        5,
        true
      );

      return pricePair;
    } catch (error) {
      return undefined;
    }
  });

  const tokenPrices = await Promise.all(promises);
}

prueba6();
