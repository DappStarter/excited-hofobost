require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth payment under hunt beach system try'; 
let testAccounts = [
"0x81ae08b06658b56b50cf0f7acbba297b0bc78d1744bf7f84319ab7a95a83421e",
"0x0aae069507245e61d963b2b989eb65c513a0df5bd83d485ebf452662c6182cd6",
"0xe0cd1e8ea99086a3721c729b9fa65521b70be49fb63f4210968ac9d73ecabacc",
"0xfc7e7b9ddac8a12380b42bfdc50d02c354fc79df3d6b8c429b44eabbe7c2b1bb",
"0xddf5c9e7cafc217f5f8fd51b8ec9d549afa290fd7fc76b60df1ba0dc482854d2",
"0x1d8e4a66ddcd725b617001a77a2fbbc26c455a8bba65238daa405777759cc3ec",
"0x38f6fce94cff9bedb9f2218b3e1474dece8e02b33d707c8a8aa31a98b0ef897d",
"0xe71b48504aeb6256bd5a0568c6f0b72fb47d8b5ca0c6ca2bc37df336ff2ad88b",
"0x267050446d3c9511840be34736de3b79e5d2d192fd1520a1690f10cb575fa8c5",
"0x9ada2223955454b2a10d47f22d174010af3b0ccf6fe0b18aa50a68c16d422ea7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
