var CorgiCoin = artifacts.require("./CorgiCoin.sol");
const _name = "CorgiCoin";
const _symbol = "CGC";
const _decimals = 18;
const _total_supply = 1000000;
module.exports = function(deployer) {
    deployer.deploy(CorgiCoin, _name, _symbol, _decimals, _total_supply);
};