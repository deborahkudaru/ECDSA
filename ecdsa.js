// generate public and private key, and address using ecdsa 

// STEP 1
// let keyPair = await window.crypto.subtle.generateKey(
//     {
//         name: "RSA-OAEP",
//         modulusLength: 4096,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: "SHA-256"
//     },
//     true,
//     ["encrypt", "decrypt"],
// );
// const privateKey = keyPair.privateKey;

// console.log(privateKey)

// function createAddress(gPoint, PRK) {
//     // let generatorPoint = ["x", "y"]
//     let publicKey = gPoint * PRK;
//     let bytes20 = publicKey.slice(20);
//     let address = `0x${bytes20}`;
//     return address;
// }



// console.log(createAddress(gPoint, privateKey))

// console.log()

let prk = Math.floor(Math.random() * (1.158 * 10 ** 77));
let prkToHex =  Math.abs(prk).toString(16);
let gPoint =10
let publicKey = Math.abs(prk * gPoint).toString(16)

function createAddress(){
    return `0x${publicKey.slice(45)}`
}

console.log(createAddress())