var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};
exports.bitcoin ={}
exports.dogecoin ={}

exports.bitcoin.livenet = {
  name: 'BitCoin livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};

exports.bitcoin.mainnet = exports.bitcoin.livenet;

exports.bitcoin.testnet = {
  name: 'Bitcoin testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

exports.dogecoin.livenet = {
  name: 'DogeCoin livenet',
  addressVersion: 0x1E,
  magic: hex('c0c0c0c0'),
  genesisBlock: {
    hash: hex('1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691'),
    merkle_root: hex('5b2a3f53f605d62c53e62932dac6925e3d74afa5a4b459745c36d42d0ed26a69'),
    height: 0,
    nonce: 99943,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    bits: 0x1e0ffff0
  },
  addressPubkey: 0x1E,
  addressScript: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  privKeyVersion: 158,
  dnsSeeds: [
    '95.85.29.144',
    '162.243.113.110',
    '146.185.181.114',
    'doge.netcodepool.org',
    'doge.cryptoculture.net',
    'dogepool.pw',
    '78.46.57.132'
  ],
  defaultClientPort: 22556

};

exports.dogecoin.testnet = {
  name: 'DogeCoin testnet',
  addressVersion: 0x6f,
  magic: hex('fcc1b7dc'),
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  genesisBlockTx: module.exports.dogecoin.livenet.genesisBlockTx,
  proofOfWorkLimit: module.exports.dogecoin.livenet.proofOfWorkLimit,
  checkpoints: [], // need to put checkput blocks here
  addressPubkey: 111,
  addressScript: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  privKeyVersion: 239,
  dnsSeeds: [
    'testdoge.lionservers.de',
    'senatorwhiskers.com'
  ],
  defaultClientPort: 44556

};

exports.mainnet=exports.bitcoin.mainnet
exports.livenet=exports.bitcoin.livenet
exports.testnet=exports.bitcoin.testnet