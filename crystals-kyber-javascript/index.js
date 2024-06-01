module.exports = {...require("./kyber512"), ...require("./kyber768"), ...require("./kyber1024")};
const kyber = require('crystals-kyber');
const fs = require('fs');

console.time("Total Execution Time");


// //Timing key generation
// console.time("Key Generation");
// let pk_sk = kyber.KeyGen768();

// let pk = pk_sk[0];
// let sk = pk_sk[1];
// console.timeEnd("Key Generation");
// console.log("Public key:",pk, "\nSecret Key:",sk);

// const skBase64 = Buffer.from(sk).toString('base64');
// console.log("Secret Key (Base64):", skBase64);
// fs.writeFileSync('SK', skBase64, 'utf8');

// const pkBase64 = Buffer.from(pk).toString('base64');
// console.log("\n\nPublic Key (Base64):", pkBase64);
// fs.writeFileSync('PK', pkBase64, 'utf8');

// console.log("Keys saved.");


// Read the Base64-encoded secret key from the file
const skBase64FromFile = fs.readFileSync('SK', 'utf8');

// Convert from Base64 to binary format
const skFromFile = Uint8Array.from(Buffer.from(skBase64FromFile, 'base64'));

// received the encapsulated key (c) in Base64 format from the sender
const cBase64 = "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";
const cReceived = Uint8Array.from(Buffer.from(cBase64, 'base64'));

// Timing decryption
console.time("Decryption");
// Decrypt the received encapsulated key using the secret key from the file
const ssReceived = kyber.Decrypt768(cReceived, skFromFile);
console.timeEnd("Decryption");
console.log("Shared Secret Received:", ssReceived);


console.timeEnd("Total Execution Time");