// import Web3 from 'web3';

// export async function Block(){


// // ABI of the smart contract
// const abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "_ethSignedMessageHash",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "_signature",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "recover",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_message",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "_signature",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "verify",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	}
// ] // copy the ABI of your smart contract here

// // Address of the deployed contract
// const contractAddress = "0xF997d292f9061a16978ACb158e0eD1533763bbF9";

// // Create an instance of the web3.js library
// const web3 = new Web3(window.ethereum);

// // Create an instance of the contract object
// const myContract = new web3.eth.Contract(abi, contractAddress);

// // The message to sign
// const message = "Hello, world!";

// // Sign the message using MetaMask
// const signature = await window.ethereum.request({
//   method: "personal_sign",
//   params: [message, window.ethereum.selectedAddress]
// });

// // Call the verify function on the contract to check the signature
// const result = await myContract.methods.verify(window.ethereum.selectedAddress, message, signature).call();

// console.log(result); // The public key address of the signer



// }

// import './Block.css';
// import React, { useState } from "react";
// import Web3 from 'web3';

// // ABI of the smart contract
// const abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_message",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "_signature",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "verifySignature",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	}
// ]; // copy the ABI of your smart contract here

// // Address of the deployed contract
// const contractAddress = "0xA3A9E40f1FDDda2fD7444a25d2dd9F2861f5ec52";

// function Block() {
//   const [message, setMessage] = useState("");
//   const [signature, setSignature] = useState("");
//   const [signer, setSigner] = useState("");

//   // Create an instance of the web3.js library using MetaMask provider
//   const web3 = new Web3(window.ethereum);

//   // Prompt user to connect to MetaMask
//   async function connectMetaMask() {
//     try {
//       // Request account access if needed
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       console.log("MetaMask connected!");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Sign the message using MetaMask
//   async function signMessage() {
//     // Prompt user to connect to MetaMask if not already connected
//     if (!window.ethereum.selectedAddress) {
//       await connectMetaMask();
//     }

//     try {
//       // Sign the message using MetaMask
//       const signature = await window.ethereum.request({
//         method: "personal_sign",
//         params: [message, window.ethereum.selectedAddress]
//       });
//       setSignature(signature);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // Verify the signature using the smart contract
//   async function verifySignature() {
//     // Create an instance of the contract object
//     const myContract = new web3.eth.Contract(abi, contractAddress);

//     try {
//       // Call the verifySignature function on the contract to verify the signature
//       const result = await myContract.methods.verifySignature(message, signature).call({
//         from: window.ethereum.selectedAddress
//       });
//       setSigner(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <h1>Sign Message</h1>
//       <label>
//         Message:
//         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={signMessage}>Sign Message</button>
//       <br />
//       <label>
//         Signature:
//         <input type="text" value={signature} readOnly />
//       </label>
//       <br />
//       <button onClick={verifySignature}>Verify Signature</button>
//       <br />
//       <label>
//         Signer:
//         <input type="text" value={signer} readOnly />
//       </label>
//     </div>
//   );
// }

// export default Block;

// import { ethers } from 'ethers';

// export async function Block() {
// 	const provider = window.ethereum;
// 	if (provider) {
// 	  try {
// 		await provider.request({ method: 'eth_requestAccounts' });
// 		const signer = provider.selectedAddress;
// 		const message = 'This is a random message to sign.';
// 		const messageBytes = ethers.toUtf8Bytes(message);
// 		const messageHash = ethers.keccak256(messageBytes);
// 		const signature = await provider.request({
// 		  method: 'eth_sign',
// 		  params: [signer, messageHash]
// 		});
// 		const { r, s, v } = ethers.splitRpcSignature(signature);
// 		const recoveredAddress = ethers.recoverAddress(messageHash, { r, s, v });
// 		console.log('Signer address:', signer);
// 		console.log('Recovered address:', recoveredAddress);
// 		return recoveredAddress;
// 	  } catch (error) {
// 		console.error(error);
// 	  }
// 	} else {
// 	  console.error('Please install Metamask.');
// 	}
//   }
import { Web3Provider } from '@ethersproject/providers';
const { ethers } = require("ethers");

const message="sign in";

export const Block = async () => {
  try {
    console.log({ message });
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
	const provider = new Web3Provider(window.ethereum);
    //const provider = new ethers.provider.Web3Provider(window.ethereum);
	//const provider = window.ethereum;
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
	const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }
	console.log(signerAddr.toLowerCase());
    return signerAddr.toLowerCase();
  } catch (err) {
	console.log(err);
  }
};
