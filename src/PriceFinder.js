const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const _ = require('lodash');
require('dotenv').config();
const constants = require(process.env.ENV === 'production' ? './mainnet/constants' : './testnet/constants');
const exchanges = require(process.env.ENV === 'production' ? './mainnet/exchanges' : './testnet/exchanges');
const tokens = require(process.env.ENV === 'production' ? './mainnet/tokens' : './testnet/tokens');
const pairs = require(process.env.ENV === 'production' ? './mainnet/pairs/pairs' : './testnet/pairs/pairs');
const web3 = new Web3(new HDWalletProvider(process.env.PRIVATE_KEY, constants.BSC_RPC));
const Utils = require('./Utils');

class PriceFinder {
  static async getAmountsIn(exchange, tokenA, tokenB, amount) {
    return new Promise((resolve, reject) => {
      exchange.contract.methods
        .getAmountsIn(amount, [tokenB.address.mainnet, tokenA.address.mainnet])
        .call()
        .then((res) => {
          const price_str2 = web3.utils.fromWei(res[0], 'Ether');
          const price_float2 = Utils.getFloat(price_str2.toString(), 18);

          resolve(price_float2);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async getAmountsOut(exchange, tokenA, tokenB, amount) {
    return new Promise((resolve, reject) => {
      exchange.contract.methods
        .getAmountsOut(amount, [tokenA.address.mainnet, tokenB.address.mainnet])
        .call()
        .then((res) => {
          resolve(this.createResponse(exchange, tokenA, tokenB, res));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static createResponse(exchange, tokenA, tokenB, res) {
    const price_str = web3.utils.fromWei(res[1], 'Ether');
    const price_float = Utils.getFloat(price_str.toString(), 8);
    return {
      exchange_name: exchange.name,
      exchange_address: exchange.router,
      tokenA_name: tokenA.symbol,
      tokenA_address: tokenA.address.mainnet,
      tokenB_name: tokenB.symbol,
      tokenB_address: tokenB.address.mainnet,
      price: res[1],
      price_str: price_str,
      price_float: price_float,
    };
  }

  static async getPrice(exchange, tokenA, tokenB, amount, detail = false) {
    return new Promise(async (resolve, reject) => {
      try {
        let price = await this.getAmountsOut(exchange, tokenA, tokenB, amount);

        if (detail) {
          let min_price = await this.getAmountsIn(exchange, tokenA, tokenB, amount);
          price = {
            ...price,
            min_price: Utils.getFloat(min_price.toString(), 8),
          };
        }

        resolve(price);
      } catch (error) {
        reject(error);
      }
    });
  }

  static async getTokenPairByExchange(exchange, tokenA, amount = '1000000000000000000') {
    const promises = Object.keys(tokens).map(async (tokenB) => {
      try {
        const price = await this.getPrice(exchange, tokenA, tokens[tokenB], amount);
        return price ? `${price.exchange_name}-${price.tokenA_name}-${price.tokenB_name}` : undefined;
      } catch (error) {
        return undefined;
      }
    });

    const prices = await Promise.all(promises);
    const pricesFiltered = prices.filter((price) => price !== undefined);
    pricesFiltered.forEach((price) => console.log(`'${price}',`));
  }

  static async getTokenPairPriceInExchanges(
    baseExchange,
    tokenA,
    tokenB,
    amount = '1000000000000000000',
    filtered = true
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const tokenPairPriceBase = await this.getPrice(
          baseExchange,
          tokens[tokenA],
          tokens[tokenB],
          amount,
          true
        );

        const promises = Object.keys(exchanges).map(async (exchange) => {
          if (
            exchanges[exchange].name === baseExchange.name ||
            !pairs[tokenA][exchanges[exchange].name].has(
              `${exchanges[exchange].name}-${tokens[tokenA].symbol}-${tokens[tokenB].symbol}`
            )
          ) {
            return;
          }

          try {
            const tokenPairPrice = await this.getPrice(
              exchanges[exchange],
              tokens[tokenA],
              tokens[tokenB],
              amount
            );
            return tokenPairPrice
              ? {
                  ...tokenPairPrice,
                  mainPrice: tokenPairPriceBase.price_str,
                  minMainPrice: tokenPairPriceBase.min_price,
                }
              : undefined;
          } catch (error) {
            return undefined;
          }
        });

        const tokenPairPrices = await Promise.all(promises);
        const tokenPairPricesFiltered = tokenPairPrices.filter(
          (tokenPairPrice) =>
            tokenPairPrice !== undefined && tokenPairPrice.price_float > tokenPairPriceBase.min_price
        );

        resolve(
          filtered
            ? tokenPairPricesFiltered
            : tokenPairPrices.filter((tokenPairPrice) => tokenPairPrice !== undefined)
        );
      } catch (error) {
        reject([]);
      }
    });
  }

  static async getAllTokenPricesInExchanges(
    baseExchange,
    baseToken,
    amount = '1000000000000000000',
    filtered = true
  ) {
    return new Promise(async (resolve, reject) => {
      const promises = Object.keys(tokens).map(async (token) => {
        if (
          token === baseToken ||
          !pairs[baseToken][baseExchange.name].has(
            `${baseExchange.name}-${tokens[baseToken].symbol}-${tokens[token].symbol}`
          )
        ) {
          return;
        }

        try {
          const tokenPairPrices = await this.getTokenPairPriceInExchanges(
            baseExchange,
            baseToken,
            token,
            amount,
            filtered
          );

          if (tokenPairPrices) {
            if (tokenPairPrices.length > 0) {
              console.log(
                `\n---------------------${baseToken}-${token}---------------------\n`,
                tokenPairPrices
              );

              return tokenPairPrices;
            }
          }

          return undefined;
        } catch (error) {
          return undefined;
        }
      });

      const tokenPrices = await Promise.all(promises);
      resolve(tokenPrices);
    });
  }

  static async getBuySellTokenPairPriceInExchanges(
    baseExchange,
    tokenA,
    tokenB,
    amount = '1000000000000000000',
    slippage = 5,
    filtered = true
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const tokenPairPriceBase = await this.getPrice(
          baseExchange,
          tokens[tokenA],
          tokens[tokenB],
          amount
        );

        const amountEth = web3.utils.fromWei(amount, 'Ether');
        const min_amount = (Number((amountEth * slippage) / 1000)) + Number(amountEth);

        const promises = Object.keys(exchanges).map(async (exchange) => {
          if (
            exchanges[exchange].name === baseExchange.name ||
            !pairs[tokenA][exchanges[exchange].name].has(
              `${exchanges[exchange].name}-${tokens[tokenA].symbol}-${tokens[tokenB].symbol}`
            )
          ) {
            return;
          }

          try {
            const tokenPairPrice = await this.getPrice(
              exchanges[exchange],
              tokens[tokenB],
              tokens[tokenA],
              tokenPairPriceBase.price            
            );
            return tokenPairPrice
              ? {
                  ...tokenPairPrice,
                  mainPrice: tokenPairPriceBase.price_str,
                  minMainPrice: min_amount,
                }
              : undefined;
          } catch (error) {
            console.log(error)
            return undefined;
          }
        });

        const tokenPairPrices = await Promise.all(promises);
        const tokenPairPricesFiltered = tokenPairPrices.filter(
          (tokenPairPrice) =>
            tokenPairPrice !== undefined && tokenPairPrice.price_float > min_amount
        );

        resolve(
          filtered
            ? tokenPairPricesFiltered
            : tokenPairPrices.filter((tokenPairPrice) => tokenPairPrice !== undefined)
        );
      } catch (error) {
        reject([]);
      }
    });
  }

  static async getAllBuySellTokenPricesInExchanges(
    baseExchange,
    baseToken,
    amount = '1000000000000000000',
    slippage = 5,
    filtered = true
  ) {
    return new Promise(async (resolve, reject) => {
      const promises = Object.keys(tokens).map(async (token) => {
        if (
          token === baseToken ||
          !pairs[baseToken][baseExchange.name].has(
            `${baseExchange.name}-${tokens[baseToken].symbol}-${tokens[token].symbol}`
          )
        ) {
          return;
        }

        try {
          const tokenPairPrices = await this.getBuySellTokenPairPriceInExchanges(
            baseExchange,
            baseToken,
            token,
            amount,
            slippage,
            filtered
          );

          if (tokenPairPrices) {
            if (tokenPairPrices.length > 0) {
              console.log(
                `\n---------------------${baseToken}-${token}---------------------\n`,
                tokenPairPrices
              );

              return tokenPairPrices;
            }
          }

          return undefined;
        } catch (error) {
          return undefined;
        }
      });

      const tokenPrices = await Promise.all(promises);
      resolve(tokenPrices);
    });
  }
}

module.exports = PriceFinder;
