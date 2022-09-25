require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "LTMYQo6OO8OL2hT9bF-siAPcre2w8roV";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "1fd2828a54721495ecee53fa59aa6ca5fe5ff4b526f1996efbf1660c4010f93d";

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
      url:'https://eth-goerli.g.alchemy.com/v2/LTMYQo6OO8OL2hT9bF-siAPcre2w8roV',
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
}