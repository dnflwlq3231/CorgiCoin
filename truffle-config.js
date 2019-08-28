    
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

//const HDWalletProvider = require('truffle-hdwallet-provider');
                  /* 0x4BC356892C6375332c800ce76E25A06Df50fA922 */
//const infuraKey = "5f59240f2ecefc221a12692cf40ee5bc9178ae88b53d2d6b7baad13732112f22";
//
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();

// require('dotenv').config();
// const Web3 = require("web3");
// const web3 = new Web3();
const WalletProvider = require("truffle-hdwallet-provider");
// const Wallet = require('ethereumjs-wallet');

var Ropsten_PrivateKeys = "41C66908C123F04A7567B6CE71F441E0AE189B7EC93D6FEF2BBAF9ACED9B6E7F";

//, "hex");
//var rinkebyWallet = Wallet.fromPrivateKey(rinkebyPrivateKey);
var rinkebyProvider = new WalletProvider(Ropsten_PrivateKeys, "https://rinkeby.infura.io/");
var ropstenProvider = new WalletProvider(Ropsten_PrivateKeys, "https://ropsten.infura.io/v3/59d3578b78994aa7ad8edc62add0ff30");
var ethmainProvider = new WalletProvider(Ropsten_PrivateKeys, "https://api.myetherwallet.com/eth");
var krwlocalProvider = new WalletProvider(Ropsten_PrivateKeys, "http://127.0.0.1:8545/");
module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      provider: krwlocalProvider
    },
    krwcoin: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 4600000,
      gasPrice: 20000000000,
      provider: krwlocalProvider
    },
    rinkeby: {
      provider: rinkebyProvider,
      gas: 4600000,
      gasPrice: 20000000000,
      network_id: "4",
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 4600000,
      gasPrice: 20000000000,
      network_id: "3",
    },
    mainnet: {
      provider: ethmainProvider,
      gas: 8500000,
      gasPrice: 20000000000,
      network_id: "1",
    }
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.5.0",
    }
  }
}