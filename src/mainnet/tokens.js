const tokens = {
  cake: {
    symbol: 'CAKE',
    address: {
      mainnet: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      testnet: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  txl: {
    symbol: 'TXL',
    address: {
      mainnet: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://tixl.org/',
  },
  cos: {
    symbol: 'COS',
    address: {
      mainnet: '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.contentos.io/',
  },
  bunny: {
    symbol: 'BUNNY',
    address: {
      mainnet: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://pancakebunny.finance/',
  },
  alice: {
    symbol: 'ALICE',
    address: {
      mainnet: '0xac51066d7bec65dc4589368da368b212745d63e8',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://www.myneighboralice.com/',
  },
  for: {
    symbol: 'FOR',
    address: {
      mainnet: '0x658A109C5900BC6d2357c87549B651670E5b0539',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.for.tube/home',
  },
  bux: {
    symbol: 'BUX',
    address: {
      mainnet: '0x211ffbe424b90e25a15531ca322adf1559779e45',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://getbux.com/bux-crypto/',
  },
  nuls: {
    symbol: 'NULS',
    address: {
      mainnet: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://www.nuls.io/',
  },
  belt: {
    symbol: 'BELT',
    address: {
      mainnet: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://beta.belt.fi/',
  },
  ramp: {
    symbol: 'RAMP',
    address: {
      mainnet: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://rampdefi.com/',
  },
  bfi: {
    symbol: 'BFI',
    address: {
      mainnet: '0x81859801b01764d4f0fa5e64729f5a6c3b91435b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bearn.fi/',
  },
  dexe: {
    symbol: 'DEXE',
    address: {
      mainnet: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://dexe.network/',
  },
  bel: {
    symbol: 'BEL',
    address: {
      mainnet: '0x8443f091997f06a61670b735ed92734f5628692f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bella.fi/',
  },
  tpt: {
    symbol: 'TPT',
    address: {
      mainnet: '0xeca41281c24451168a37211f0bc2b8645af45092',
      testnet: '',
    },
    decimals: 4,
    projectLink: 'https://www.tokenpocket.pro/',
  },
  watch: {
    symbol: 'WATCH',
    address: {
      mainnet: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://yieldwatch.net/',
  },
  xmark: {
    symbol: 'xMARK',
    address: {
      mainnet: '0x26a5dfab467d4f58fb266648cae769503cec9580',
      testnet: '',
    },
    decimals: 9,
    projectLink: 'https://benchmarkprotocol.finance/',
  },
  bmxx: {
    symbol: 'bMXX',
    address: {
      mainnet: '0x4131b87f74415190425ccd873048c708f8005823',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://multiplier.finance/',
  },
  iotx: {
    symbol: 'IOTX',
    address: {
      mainnet: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://iotex.io/',
  },
  bor: {
    symbol: 'BOR',
    address: {
      mainnet: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.boringdao.com/',
  },
  bopen: {
    symbol: 'bOPEN',
    address: {
      mainnet: '0xf35262a9d427f96d2437379ef090db986eae5d42',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://opendao.io/',
  },
  dodo: {
    symbol: 'DODO',
    address: {
      mainnet: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://dodoex.io/',
  },
  swingby: {
    symbol: 'SWINGBY',
    address: {
      mainnet: '0x71de20e0c4616e7fcbfdd3f875d568492cbe4739',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://swingby.network/',
  },
  bry: {
    symbol: 'BRY',
    address: {
      mainnet: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://berrydata.co/',
  },
  zee: {
    symbol: 'ZEE',
    address: {
      mainnet: '0x44754455564474a89358b2c2265883df993b12f0',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://zeroswap.io/',
  },
  swgb: {
    symbol: 'SWGb',
    address: {
      mainnet: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://swirgepay.com/',
  },
  swg: {
    symbol: 'SWG',
    address: {
      mainnet: '0xe792f64c582698b8572aaf765bdc426ac3aefb6b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://swirgepay.com/',
  },
  sfp: {
    symbol: 'SFP',
    address: {
      mainnet: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.safepal.io/',
  },
  lina: {
    symbol: 'LINA',
    address: {
      mainnet: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://linear.finance/',
  },
  lit: {
    symbol: 'LIT',
    address: {
      mainnet: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.litentry.com/',
  },
  hget: {
    symbol: 'HGET',
    address: {
      mainnet: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://www.hedget.com/',
  },
  bdo: {
    symbol: 'BDO',
    address: {
      mainnet: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bdollar.fi/',
  },
  egld: {
    symbol: 'EGLD',
    address: {
      mainnet: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://elrond.com/',
  },
  ust: {
    symbol: 'UST',
    address: {
      mainnet: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  wsote: {
    symbol: 'wSOTE',
    address: {
      mainnet: '0x541e619858737031a1244a5d0cd47e5ef480342c',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://soteria.finance/#/',
  },
  front: {
    symbol: 'FRONT',
    address: {
      mainnet: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://frontier.xyz/',
  },
  helmet: {
    symbol: 'Helmet',
    address: {
      mainnet: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.helmet.insure/',
  },
  btcst: {
    symbol: 'BTCST',
    address: {
      mainnet: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
      testnet: '',
    },
    decimals: 17,
    projectLink: 'https://www.1-b.tc/',
  },
  bscx: {
    symbol: 'BSCX',
    address: {
      mainnet: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bscex.org/',
  },
  ten: {
    symbol: 'TEN',
    address: {
      mainnet: '0xdff8cb622790b7f92686c722b02cab55592f152c',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.tenet.farm/',
  },
  balbt: {
    symbol: 'bALBT',
    address: {
      mainnet: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://allianceblock.io/',
  },
  asr: {
    symbol: 'ASR',
    address: {
      mainnet: '0x80d5f92c2c8c682070c95495313ddb680b267320',
      testnet: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  atm: {
    symbol: 'ATM',
    address: {
      mainnet: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
      testnet: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  og: {
    symbol: 'OG',
    address: {
      mainnet: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
      testnet: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  reef: {
    symbol: 'REEF',
    address: {
      mainnet: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://reef.finance/',
  },
  ditto: {
    symbol: 'DITTO',
    address: {
      mainnet: '0x233d91a0713155003fc4dce0afa871b508b3b715',
      testnet: '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },
  juv: {
    symbol: 'JUV',
    address: {
      mainnet: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
      testnet: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  psg: {
    symbol: 'PSG',
    address: {
      mainnet: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
      testnet: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  vai: {
    symbol: 'VAI',
    address: {
      mainnet: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      mainnet: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      testnet: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  blink: {
    symbol: 'BLINK',
    address: {
      mainnet: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },
  unfi: {
    symbol: 'UNFI',
    address: {
      mainnet: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://unifiprotocol.com',
  },
  twt: {
    symbol: 'TWT',
    address: {
      mainnet: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  hard: {
    symbol: 'HARD',
    address: {
      mainnet: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://hard.kava.io',
  },
  broobee: {
    symbol: 'bROOBEE',
    address: {
      mainnet: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://roobee.io/',
  },
  stax: {
    symbol: 'STAX',
    address: {
      mainnet: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'http://stablexswap.com/',
  },
  nar: {
    symbol: 'NAR',
    address: {
      mainnet: '0xa1303e6199b319a891b79685f0537d289af1fc83',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://narwhalswap.org/',
  },
  nya: {
    symbol: 'NYA',
    address: {
      mainnet: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://nyanswop.org/',
  },
  ctk: {
    symbol: 'CTK',
    address: {
      mainnet: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://www.certik.foundation/',
  },
  inj: {
    symbol: 'INJ',
    address: {
      mainnet: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://injectiveprotocol.com/',
  },
  sxp: {
    symbol: 'SXP',
    address: {
      mainnet: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://swipe.io/',
  },
  alpha: {
    symbol: 'ALPHA',
    address: {
      mainnet: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://alphafinance.io/',
  },
  xvs: {
    symbol: 'XVS',
    address: {
      mainnet: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      mainnet: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://sushi.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      mainnet: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      mainnet: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
      testnet: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      mainnet: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://beefy.finance/',
  },
  dusk: {
    symbol: 'DUSK',
    address: {
      mainnet: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://dusk.network/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      mainnet: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      mainnet: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  beth: {
    symbol: 'BETH',
    address: {
      mainnet: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
  },
  mamzn: {
    symbol: 'mAMZN',
    address: {
      mainnet: '0x3947B992DC0147D2D89dF0392213781b04B25075',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mgoogl: {
    symbol: 'mGOOGL',
    address: {
      mainnet: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mnflx: {
    symbol: 'mNFLX',
    address: {
      mainnet: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mtsla: {
    symbol: 'mTSLA',
    address: {
      mainnet: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      mainnet: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      mainnet: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      mainnet: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'http://www.makerdao.com/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      mainnet: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.cardano.org/',
  },
  band: {
    symbol: 'BAND',
    address: {
      mainnet: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bandprotocol.com/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      mainnet: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      mainnet: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://eos.io/',
  },
  link: {
    symbol: 'LINK',
    address: {
      mainnet: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      mainnet: '0x55d398326f99059ff775485246999027b3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      mainnet: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      mainnet: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      mainnet: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      mainnet: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      mainnet: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    decimals: 18,
    projectLink: 'https://www.tezos.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      mainnet: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'http://bch.info/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      mainnet: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      mainnet: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  fil: {
    symbol: 'FIL',
    address: {
      mainnet: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      mainnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.bakeryswap.org/',
  },
  burger: {
    symbol: 'BURGER',
    address: {
      mainnet: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
      testnet: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://burgerswap.org/',
  },
  bdigg: {
    symbol: 'bDIGG',
    address: {
      mainnet: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  bbadger: {
    symbol: 'bBadger',
    address: {
      mainnet: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  trade: {
    symbol: 'TRADE',
    address: {
      mainnet: '0x7af173f350d916358af3e218bdf2178494beb748',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://unitrade.app/',
  },
  pnt: {
    symbol: 'PNT',
    address: {
      mainnet: '0xdaacb0ab6fb34d24e8a67bfa14bf4d95d4c7af92',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  mir: {
    symbol: 'MIR',
    address: {
      mainnet: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  pbtc: {
    symbol: 'pBTC',
    address: {
      mainnet: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  lto: {
    symbol: 'LTO',
    address: {
      mainnet: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ltonetwork.com/',
  },
  pcws: {
    symbol: 'pCWS',
    address: {
      mainnet: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://game.seascape.network/',
  },
  zil: {
    symbol: 'ZIL',
    address: {
      mainnet: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
      testnet: '',
    },
    decimals: 12,
    projectLink: 'https://www.zilliqa.com/',
  },
  lien: {
    symbol: 'LIEN',
    address: {
      mainnet: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://lien.finance/',
  },
  swth: {
    symbol: 'SWTH',
    address: {
      mainnet: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://switcheo.network/',
  },
  dft: {
    symbol: 'DFT',
    address: {
      mainnet: '0x42712dF5009c20fee340B245b510c0395896cF6e',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.dfuture.com/home',
  },
  gum: {
    symbol: 'GUM',
    address: {
      mainnet: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://gourmetgalaxy.io/',
  },
  dego: {
    symbol: 'DEGO',
    address: {
      mainnet: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.dego.finance/home',
  },
  nrv: {
    symbol: 'NRV',
    address: {
      mainnet: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://nerve.fi/',
  },
  easy: {
    symbol: 'EASY',
    address: {
      mainnet: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://easyfi.network/',
  },
  oddz: {
    symbol: 'ODDZ',
    address: {
      mainnet: '0xcd40f2670cf58720b694968698a5514e924f742d',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://oddz.fi/',
  },
  hoo: {
    symbol: 'HOO',
    address: {
      mainnet: '0xe1d1f66215998786110ba0102ef558b22224c016',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://hoo.com/',
  },
  apys: {
    symbol: 'APYS',
    address: {
      mainnet: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://apyswap.com/',
  },
  bondly: {
    symbol: 'BONDLY',
    address: {
      mainnet: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.bondly.finance/',
  },
  tko: {
    symbol: 'TKO',
    address: {
      mainnet: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.tokocrypto.com/',
  },
  itam: {
    symbol: 'ITAM',
    address: {
      mainnet: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://itam.network/',
  },
  arpa: {
    symbol: 'ARPA',
    address: {
      mainnet: '0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://arpachain.io/',
  },
  eps: {
    symbol: 'EPS',
    address: {
      mainnet: '0xa7f552078dcc247c2684336020c03648500c6d9f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://ellipsis.finance/',
  },
  jgn: {
    symbol: 'JGN',
    address: {
      mainnet: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://jgndefi.com/',
  },
  tlm: {
    symbol: 'TLM',
    address: {
      mainnet: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
      testnet: '',
    },
    decimals: 4,
    projectLink: 'https://alienworlds.io/',
  },
  perl: {
    symbol: 'PERL',
    address: {
      mainnet: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://perlinx.finance/',
  },
  alpa: {
    symbol: 'ALPA',
    address: {
      mainnet: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.alpaca.city/',
  },
  hzn: {
    symbol: 'HZN',
    address: {
      mainnet: '0xc0eff7749b125444953ef89682201fb8c6a917cd',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://horizonprotocol.com/',
  },
  suter: {
    symbol: 'SUTER',
    address: {
      mainnet: '0x4cfbbdfbd5bf0814472ff35c72717bd095ada055',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://shield.suterusu.io/',
  },
  cgg: {
    symbol: 'CGG',
    address: {
      mainnet: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://chainguardians.io/',
  },
  mix: {
    symbol: 'MIX',
    address: {
      mainnet: '0xB67754f5b4C704A24d2db68e661b2875a4dDD197',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mixie.chainguardians.io/',
  },
  hakka: {
    symbol: 'HAKKA',
    address: {
      mainnet: '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://hakka.finance/',
  },
  xed: {
    symbol: 'XED',
    address: {
      mainnet: '0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.exeedme.com/',
  },
  pibtc: {
    symbol: 'τBTC',
    address: {
      mainnet: '0x2cd1075682b0fccaadd0ca629e138e64015ba11c',
      testnet: '',
    },
    decimals: 9,
    projectLink: 'https://www.btcst.finance/',
  },
  alpaca: {
    symbol: 'ALPACA',
    address: {
      mainnet: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.alpacafinance.org/',
  },
  dfd: {
    symbol: 'DFD',
    address: {
      mainnet: '0x9899a98b222fcb2f3dbee7df45d943093a4ff9ff',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://dusd.finance/',
  },
  lmt: {
    symbol: 'LMT',
    address: {
      mainnet: '0x9617857e191354dbea0b714d78bc59e57c411087',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://lympo.io/lmt/',
  },
  btt: {
    symbol: 'BTT',
    address: {
      mainnet: '0x8595f9da7b868b1822194faed312235e43007b49',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.bittorrent.com/',
  },
  trx: {
    symbol: 'TRX',
    address: {
      mainnet: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://tron.network/',
  },
  win: {
    symbol: 'WIN',
    address: {
      mainnet: '0xaef0d72a118ce24fee3cd1d43d383897d05b4e99',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://winklink.org/',
  },
  mcoin: {
    symbol: 'mCOIN',
    address: {
      mainnet: '0x49022089e78a8d46ec87a3af86a1db6c189afa6f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  math: {
    symbol: 'MATH',
    address: {
      mainnet: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://mathwallet.org/',
  },
  kun: {
    symbol: 'KUN',
    address: {
      mainnet: '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://chemix.io/home',
  },
  qsd: {
    symbol: 'QSD',
    address: {
      mainnet: '0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://chemix.io/home',
  },
  hyfi: {
    symbol: 'HYFI',
    address: {
      mainnet: '0x9a319b959e33369C5eaA494a770117eE3e585318',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://hyfi.pro/#/',
  },
  oin: {
    symbol: 'OIN',
    address: {
      mainnet: '0x658E64FFcF40D240A43D52CA9342140316Ae44fA',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://oin.finance/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      mainnet: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://dogecoin.com/',
  },
  fine: {
    symbol: 'FINE',
    address: {
      mainnet: '0x4e6415a5727ea08aae4580057187923aec331227',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://refinable.com/',
  },
  one: {
    symbol: 'ONE',
    address: {
      mainnet: '0x04baf95fd4c52fd09a56d840baee0ab8d7357bf0',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.bigone.com/',
  },
  pmon: {
    symbol: 'PMON',
    address: {
      mainnet: '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://polkamon.com/',
  },
  hotcross: {
    symbol: 'HOTCROSS',
    address: {
      mainnet: '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.hotcross.com/',
  },
  pidoge: {
    symbol: 'τDOGE',
    address: {
      mainnet: '0xe550a593d09fbc8dcd557b5c88cea6946a8b404a',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://www.btcst.finance/',
  },
  btr: {
    symbol: 'BTR',
    address: {
      mainnet: '0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.bitrue.com/',
  },
  ubxt: {
    symbol: 'UBXT',
    address: {
      mainnet: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://upbots.com/',
  },
  wmass: {
    symbol: 'WMASS',
    address: {
      mainnet: '0x7e396bfc8a2f84748701167c2d622f041a1d7a17',
      testnet: '',
    },
    decimals: 8,
    projectLink: 'https://massnet.org/en/',
  },
  rfox: {
    symbol: 'RFOX',
    address: {
      mainnet: '0x0a3a21356793b49154fd3bbe91cbc2a16c0457f5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.redfoxlabs.io/',
  },
  xend: {
    symbol: 'XEND',
    address: {
      mainnet: '0x4a080377f83D669D7bB83B3184a8A5E61B500608',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://xend.finance/',
  },
  cyc: {
    symbol: 'CYC',
    address: {
      mainnet: '0x810ee35443639348adbbc467b33310d2ab43c168',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://cyclone.xyz/',
  },
  chr: {
    symbol: 'CHR',
    address: {
      mainnet: '0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE',
      testnet: '',
    },
    decimals: 6,
    projectLink: 'https://chromia.com/',
  },
  kalm: {
    symbol: 'KALM',
    address: {
      mainnet: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://kalmar.io/',
  },
  deri: {
    symbol: 'DERI',
    address: {
      mainnet: '0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://deri.finance/#/index',
  },
  well: {
    symbol: 'WELL',
    address: {
      mainnet: '0xf07a32eb035b786898c00bb1c64d8c6f8e7a46d5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.bitwellex.com/',
  },
  popen: {
    symbol: 'pOPEN',
    address: {
      mainnet: '0xabae871b7e3b67aeec6b46ae9fe1a91660aadac5',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://opendao.io/',
  },
  ez: {
    symbol: 'EZ',
    address: {
      mainnet: '0x5512014efa6cd57764fa743756f7a6ce3358cc83',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://easyfi.network/',
  },
  vrt: {
    symbol: 'VRT',
    address: {
      mainnet: '0x5f84ce30dc3cf7909101c69086c50de191895883',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  tusd: {
    symbol: 'TUSD',
    address: {
      mainnet: '0x14016e85a25aeb13065688cafb43044c2ef86784',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.trueusd.com/',
  },
  mtrg: {
    symbol: 'MTRG',
    address: {
      mainnet: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.meter.io/',
  },
  ktn: {
    symbol: 'KTN',
    address: {
      mainnet: '0xdae6c2a48bfaa66b43815c5548b10800919c993e',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://kattana.io/',
  },
  qkc: {
    symbol: 'QKC',
    address: {
      mainnet: '0xa1434f1fc3f437fa33f7a781e041961c0205b5da',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://quarkchain.io/',
  },
  bcfx: {
    symbol: 'bCFX',
    address: {
      mainnet: '0x045c4324039dA91c52C55DF5D785385Aab073DcF',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.confluxnetwork.org/',
  },
  mx: {
    symbol: 'MX',
    address: {
      mainnet: '0x9f882567a62a5560d147d64871776eea72df41d3',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.mxc.com/',
  },
  ata: {
    symbol: 'ATA',
    address: {
      mainnet: '0xa2120b9e674d3fc3875f415a7df52e382f141225',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.ata.network/',
  },
  mbox: {
    symbol: 'MBOX',
    address: {
      mainnet: '0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.mobox.io/#/',
  },
  boring: {
    symbol: 'BORING',
    address: {
      mainnet: '0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://www.boringdao.com/',
  },
  marsh: {
    symbol: 'MARSH',
    address: {
      mainnet: '0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256',
      testnet: '',
    },
    decimals: 18,
    projectLink: 'https://unmarshal.io/',
  },
};

module.exports = tokens;
