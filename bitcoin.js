const CoinKey = require("coinkey");

let Wallet = new CoinKey.createRandom();

console.log(Wallet.privateKey.toString('hex'));
console.log(Wallet.publicAddress);