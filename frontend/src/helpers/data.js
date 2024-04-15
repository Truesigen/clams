import { Connection, Keypair } from "@solana/web3.js";
import * as bs58 from 'bs58';


export const DONAT_WALLET_ADDRESS = import.meta.env.VITE_MAIN_CLAIMER_ADDRESS

export const AIRDROP_WALLET_SIGNER = Keypair.fromSecretKey(bs58.decode(import.meta.env.VITE_PRIVATE_KEY_SIGNER));

export const CONNECTION = new Connection(import.meta.env.VITE_QUICK_NODE_API)