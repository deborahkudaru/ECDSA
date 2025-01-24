const keccak256 = require('keccak256')

let privateKey = Math.floor(Math.random() * (2**256));
let privateKeyToHex =  Math.abs(privateKey).toString(16);
let gPoint =10
let publicKey = Math.abs(privateKey * gPoint).toString(16)
let hashofPublicKey = keccak256(Buffer.from(publicKey))

function createAddress(){
    return `address: 0x${hashofPublicKey.toString('hex').slice(20)}`
}
console.log(`private key: ${privateKeyToHex}`)
console.log(`public key: ${hashofPublicKey.toString('hex')}`)

console.log(createAddress())
