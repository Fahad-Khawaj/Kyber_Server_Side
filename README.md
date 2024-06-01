# Kyber_Server_Side
This repository contains the server-side implementation of the Kyber post-quantum cryptographic algorithm. The server side handles receiving encrypted symmetric key from the client, decrypting them using its private key, and securely responding back to the client.

# Crystal_Kyber

Kyber is a post-quantum cryptographic algorithm designed to secure communications in a world where quantum computers could break traditional encryption methods. Developed as part of the NIST Post-Quantum Cryptography Standardization Project, Kyber ensures that data remains secure against the computational power of future quantum computers.


# Purpose:
To securely generate and manage public/private key pairs.

![Client-Server Interaction](Kyber_WorkFlow.png)

The provided picture illustrates the interaction between the client-side and server-side implementations of Kyber using public key encryption and the KEM (Key Encapsulation Mechanism). The client initiates the communication by generating key pairs and encrypting data(C) cipher containing (encapsulated key) using public key of the server, after encryption which is then securely transmitted to the server. The server receives the encrypted (C) cipher data containing (encapsulated symmetric Key), the server side decrypts it using private key of their own, and processes the request, ensuring a secure end-to-end communication channel to get the same key on both ends. This setup is designed to safeguard against potential threats posed by quantum computing advancements, ensuring long-term data security.

## Installation
Instructions for setting up the server-side application.

## Usage
Using Node.js (v16.17.0):
```
npm install crystals-kyber
```
Import the module at the top of your index.js file.

to run the code write in console 
```
node index.js
```

```
const kyber = require('crystals-kyber');
```
To use in your code (768 can be replaced with 512 or 1024).
```
// To generate a public and private key pair (pk, sk)
let pk_sk = kyber.KeyGen768();
let pk = pk_sk[0];
let sk = pk_sk[1];
```

First generate public and private key pairs 
```
// //Timing key generation
// console.time("Key Generation");
// let pk_sk = kyber.KeyGen768();

// let pk = pk_sk[0];
// let sk = pk_sk[1];
// console.timeEnd("Key Generation"); to note the time of the key generation

// console.log("Public key:",pk, "\nSecret Key:",sk); displaying the key values in buffer array

// const skBase64 = Buffer.from(sk).toString('base64'); converting buffer array values to Base64
// console.log("Secret Key (Base64):", skBase64);

// fs.writeFileSync('SK', skBase64, 'utf8'); writing and saving genrated key pairs to the files

// const pkBase64 = Buffer.from(pk).toString('base64');
// console.log("\n\nPublic Key (Base64):", pkBase64);
// fs.writeFileSync('PK', pkBase64, 'utf8');

// console.log("Keys saved.");
```
After genrating key pairs comment out the key generations lines and continue with the further steps of decryption to decrypt the received C cipher (secret encapsulated symmetric Key)

```
// Read the Base64-encoded secret key from the file
const skBase64FromFile = fs.readFileSync('SK', 'utf8');

// Convert from Base64 to binary format
const skFromFile = Uint8Array.from(Buffer.from(skBase64FromFile, 'base64'));

// received the encapsulated key (c) in Base64 format from the sender
const cBase64 = "paste the base 64 received from client";
const cReceived = Uint8Array.from(Buffer.from(cBase64, 'base64'));

// Timing decryption
console.time("Decryption");
// Decrypt the received encapsulated key using the secret key from the file
const ssReceived = kyber.Decrypt768(cReceived, skFromFile);
console.timeEnd("Decryption");
console.log("Shared Secret Received:", ssReceived); //display the shared secret key
```
## Further details about Kyber.
Crystal Kyber [https://pq-crystals.org/kyber/]
and this code was obtained from public repository of (Crystal Kyber) [https://github.com/antontutoveanu/crystals-kyber-javascript] 
