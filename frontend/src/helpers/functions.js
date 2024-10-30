import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { fetchDigitalAsset, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { TOKEN_PROGRAM_ID, createBurnInstruction, createCloseAccountInstruction } from '@solana/spl-token'
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, TransactionInstruction, VersionedTransaction, TransactionMessage } from '@solana/web3.js'
import { AIRDROP_WALLET_SIGNER, CONNECTION, DONAT_WALLET_ADDRESS } from './data'


export const createPublicKeyInstance = (publicKeyString) => {
    return new PublicKey(publicKeyString)
}

export const viewAllTokensByOwner = async (publicKey, connection) => {

    const tokensData = []

    const umi = createUmi(connection).use(mplTokenMetadata())

    let tx = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID }, 'confirmed');

    for (const el of tx.value) {

        try {
            let asset = await fetchDigitalAsset(umi, el.account.data.parsed.info.mint)

            if (asset.mint.decimals > 0) {
                tokensData.push({
                    address: el.pubkey.toString(),
                    token: el.account.data.parsed.info.tokenAmount,
                    metadata: asset.metadata
                })
            }

        } catch (error) {
            alert(error)
        }
    }

    return tokensData
}

export const createCloseInstruction = async (token, publicKey) => {

    // const instructions = [
    //     SystemProgram.transfer({
    //         fromPubkey: publicKey.value,
    //         toPubkey: createPublicKeyInstance(DONAT_WALLET_ADDRESS),
    //         lamports: 0.01 * LAMPORTS_PER_SOL,
    //     }),
    // ]

    let latestBlock = await CONNECTION.getLatestBlockhash('finalized')

    // let messagev0 = new TransactionMessage({
    //     payerKey: publicKey.value,
    //     recentBlockhash: latestBlock,
    //     instructions: instructions
    // }).compileToV0Message()
    // const tx = new VersionedTransaction(messagev0)
    // console.log(tx)
    let tx = new Transaction({ blockhash: latestBlock.blockhash, feePayer: publicKey.value, lastValidBlockHeight: latestBlock.lastValidBlockHeight })

    if (token.token.amount > 0) {
        tx.add(createBurnInstruction(
            createPublicKeyInstance(token.address),
            createPublicKeyInstance(token.metadata.mint),
            publicKey.value,
            token.token.amount,
            publicKey.value,
            TOKEN_PROGRAM_ID
        ))
    }

    tx.add(
        createCloseAccountInstruction(
            createPublicKeyInstance(token.address),
            createPublicKeyInstance(DONAT_WALLET_ADDRESS),
            publicKey.value,
            publicKey.value,
            TOKEN_PROGRAM_ID
        )
    )


    return tx
}