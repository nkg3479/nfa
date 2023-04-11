import { Web3Provider } from '@ethersproject/providers';
import { getValues } from '../graph/graph';
const { ethers } = require("ethers");

const message="sign in";

export async function  Block () {
  try {
    console.log({ message });
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
	const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
	const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }
	console.log(signerAddr);
   return await getValues(signerAddr.toLowerCase());
  } catch (err) {
	console.log(err);
  }
};
