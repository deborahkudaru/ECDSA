const keccak256 = require('keccak256')

let prk = Math.floor(Math.random() * (1.158 * 10 ** 77));
let prkToHex =  Math.abs(prk).toString(16);
let gPoint =10
let publicKey = Math.abs(prk * gPoint).toString(16)
let hashofPublicKey = keccak256(Buffer.from(publicKey))

function createAddress(){
    return `address: 0x${hashofPublicKey.toString('hex').slice(20)}`
}
console.log(`private key: ${prkToHex}`)
console.log(`public key: ${hashofPublicKey.toString('hex')}`)

console.log(createAddress())
