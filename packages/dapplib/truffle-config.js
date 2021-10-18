require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain smile hope clog bottom gate'; 
let testAccounts = [
"0xc1993e30732fd5e1ca76cae7faa4581a8c77507cce0d76eb239018e842f7d699",
"0x6fd74dad19cbbfe635a7c09d1c03ce6e21ff08b9d841f138171209d98dac2526",
"0x44021da00c8d50efae44c3f0bce6167da282a34b9a0de6df219cc0c7980830eb",
"0x444e0797d36ea37ea83b40395aa911481cdeb54dc0028a8037db2d439369e08d",
"0x5c9953e721d7f3374fe0659ddf775832fb5413f8fc4444eb5b28a1d224a8dd2a",
"0xb2cc538777c007e9f85d1f395fd8a1697af9396081b66b99b862921a037f0d7e",
"0xb6a2abddcb32ac6d890b456a8b7e17ed43eaaa87d0d23ea005098d57edddab09",
"0x8d088ed7049dd7b1cb0b941b215c9a3cd6f4c361ba7fc2dece97b03e5607c2bc",
"0x9dffd848d269650ad1f53de3f2f9b8137a37026b4d7341d75edd963326f6cb73",
"0xe1a35b199574d60b7ba711b20ed6b5bd699394a69a6106b27d0b95a274ed28f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


