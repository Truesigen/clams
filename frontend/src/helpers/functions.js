import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { fetchDigitalAsset, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { TOKEN_PROGRAM_ID, createBurnCheckedInstruction, createCloseAccountInstruction } from '@solana/spl-token'
import { PublicKey, Transaction } from '@solana/web3.js'
import { AIRDROP_WALLET_SIGNER, DONAT_WALLET_ADDRESS } from './data'


export const createPublicKeyInstance = (publicKeySting) => {
    return new PublicKey(publicKeySting)
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

export const createCloseInstruction = (token, publicKey) => {

    let tx = new Transaction()

    if (token.token.amount > 0) {
        tx.add(createBurnCheckedInstruction(
            createPublicKeyInstance(token.address),
            createPublicKeyInstance(token.metadata.mint),
            publicKey.value,
            token.token.amount,
            token.token.decimals,
            publicKey.value,
            TOKEN_PROGRAM_ID
        ))
    }

    tx.add(
        createCloseAccountInstruction(
            createPublicKeyInstance(token.address),
            createPublicKeyInstance(AIRDROP_WALLET_SIGNER.publicKey),
            publicKey.value,
            publicKey.value,
            TOKEN_PROGRAM_ID
        )
    )

    return tx
}