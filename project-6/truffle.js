const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "e6cd1247c06d46f9b2cec49cab262fd1";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
	},	
	rinkeby: {
		provider: () => new HDWalletProvider("antenna garden drive olympic fade term sorry already panel light execute charge", `https://rinkeby.infura.io/v3/${infuraKey}`),
		network_id: 4,
		gas: 4500000,
		gasPrice: 10000000000
	}
  }
};