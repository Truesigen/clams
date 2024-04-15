<template>
    <section class="py-36 indie-flower-regular antialiased">
        <div class="text-center px-32">
            <img :src="snailQueen" class="float-left w-1/6">
            <h1 class="text-4xl pb-10 font-semibold">
                So here
                your first mission, fellas!</h1>
            <div class="text-2xl pb-10">
                <p>Margarita, gathering her strength and donning her work gloves, stepped onto the seashore, ready for
                    labor.
                    But her task has only just begun. Armed with her perseverance and a desire to make a difference in
                    this
                    world, she accepts nature's challenge and begins to collect trash from the seabed. She feels
                    inspired by
                    the
                    magnificence of the ocean and hears the encouragement of the waves.There is still much work to be
                    done,
                    and
                    Margarita is prepared to face this challenge. Her efforts in the fight for the cleanliness of the
                    ocean
                    are
                    only just beginning, and she is determined to continue her mission until the very end.</P>
            </div>
        </div>
        <div class="flex flex-row justify-end space-x-6 pr-5">

            <button
                class="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-12 text-xl font-medium text-white shadow-sm shadow-red-500/50"
                @click.prevent="viewTokenListByUsingWallet" v-show="explodeDipBtnVisible">explore dip</button>

        </div>


    </section>

    <section v-if="explodeDipBtnVisible == false" class="min-h-screen">
        <token-list :tokenData="tokensData" @destroyToken="burnAndCloseAccount"></token-list>
    </section>
</template>
<script setup>

import snailQueen from '@/assets/margarita.png'
import TokenList from '@/components/TokenList.vue'
import { CONNECTION } from '@/helpers/data'
import { createPublicKeyInstance, createCloseInstruction } from '@/helpers/functions'
import http from '@/helpers/http'

import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ref } from 'vue'

import { fetchDigitalAsset } from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'

import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'


const { publicKey, sendTransaction } = useWallet();

const tokensData = ref([])
const explodeDipBtnVisible = ref(true)


const viewTokenListByUsingWallet = async () => {
    if (!publicKey.value) {
        alert('Connect wallet first!')
        return
    }
    const umi = createUmi(CONNECTION).use(mplTokenMetadata())

    let tx = await CONNECTION.getParsedTokenAccountsByOwner(publicKey.value, { programId: TOKEN_PROGRAM_ID }, 'confirmed');

    explodeDipBtnVisible.value = false

    for (const el of tx.value) {
        await new Promise(resolve => setTimeout(resolve, 500))

        try {
            let asset = await fetchDigitalAsset(umi, el.account.data.parsed.info.mint)

            if (asset.mint.decimals > 0) {
                tokensData.value.push({
                    address: el.pubkey.toString(),
                    token: el.account.data.parsed.info.tokenAmount,
                    metadata: asset.metadata
                })
            }

        } catch (error) {
            alert(error)
        }
    }


}

const burnAndCloseAccount = async (token, index) => {
    if (!publicKey.value) {
        alert('wallet not detected!')
    }

    let confirmation = confirm('Warning! This procces cannot be canceled! We continue?')

    if (confirmation) {

        let tx = createCloseInstruction(token, publicKey)

        await sendTransaction(tx, CONNECTION).then(tx => {

            http().post('http://localhost/api/burned/store',
                { signature: tx, account: token.address, name: token.metadata.name, amount: token.token.uiAmountString }).then(success => {
                    alert(success.data.message)
                })

            tokensData.value.splice(index, 1)
        }).catch(error => {
            alert(error)
        })

    } else {
        alert('weakling!')
    }

}





</script>
<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Yarndings+12+Charted&display=swap');

.indie-flower-regular {
    font-family: "Indie Flower", cursive;
    font-weight: 500;
    font-style: normal;
}
</style>