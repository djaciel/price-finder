const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');
require('dotenv').config();
const constants = require(process.env.ENV ? './mainnet/constants' : './testnet/constants');
const exchanges = require(process.env.ENV ? './mainnet/exchanges' : './testnet/exchanges');
const web3 = new Web3(new HDWalletProvider(process.env.PRIVATE_KEY, constants.BSC_RPC));

class PriceFinder {
  static async getPrices(mainRouterName, tokenA, tokenB, amount) {
    return Promise.all(
      Object.keys(routers).map(async (routerName) => {
        try {
          return await PriceFinder.getPrice(mainRouterName, routers[routerName], tokenA, tokenB, amount);
        } catch (error) {
          return {
            router_name: 'nada',
            price_float: 0,
          };
        }
      })
    );
  }

  static comparePrices(mainRouterName, amount, tokenA, tokenB, showDetail, showAll = false) {
    this.getPrices(mainRouterName, tokenA, tokenB, amount).then((prices) => {
      const mainRouter = prices.find((price) => price !== undefined && price.router_name === mainRouterName);

      if (mainRouter) {
        const priceMainRouter = mainRouter.price_float;

        const minPrice = mainRouter.min_price;

        let pricesFiltered = prices
          .filter((price) => {
            return price.router_name !== 'nada' && price.price_float >= minPrice;
          })
          .map((price) => {
            return {
              ...price,
              priceMainRouter,
              minPriceMainRouter: minPrice,
            };
          });

        if (showDetail) {
          console.log(`------------${mainRouter.tokenA_name} - ${mainRouter.tokenB_name}------------`);
          if (showAll) {
            console.log(prices);
          } else {
            console.log(pricesFiltered.length > 0 ? pricesFiltered : 'Nothing :(');
          }
        }
      }
    });
  }

  static async getPrice(mainRouterName, router, tokenA, tokenB, amount) {
    return new Promise((resolve, reject) => {
      router.contract.methods
        .getAmountsOut(amount, [tokenA.address.mainnet, tokenB.address.mainnet])
        .call()
        .then((res) => {
          const price_str = web3.utils.fromWei(res[1], 'Ether');
          const price_float = this.getFloat(price_str.toString(), 8);

          if (router.name === mainRouterName) {
            router.contract.methods
              .getAmountsIn(amount, [tokenB.address.mainnet, tokenA.address.mainnet])
              .call()
              .then((res) => {
                const price_str2 = web3.utils.fromWei(res[0], 'Ether');
                const price_float2 = this.getFloat(price_str2.toString(), 18);

                resolve({
                  router_address: router.address,
                  tokenA_name: tokenA.symbol,
                  tokenA_address: tokenA.address.mainnet,
                  tokenB_name: tokenB.symbol,
                  tokenB_address: tokenB.address.mainnet,
                  price_str: price_str,
                  price_float: price_float,
                  min_price: price_float2,
                });
              })
              .catch((error) => {
                reject(error);
              });
          } else {
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getFloat(str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf('.') + val + 1);
    return Number(str);
  }
}

module.exports = PriceFinder;
