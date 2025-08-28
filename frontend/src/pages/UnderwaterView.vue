<template>
    <div class="h-screen relative flex items-center bg-auto overflow-auto"
        :style="{ backgroundImage: `url(${underwater})` }">
        <Sound :audio="mainSound" />
        <Dialog v-model:visible="misc.warningInfo" :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" :closable="false" :showHeader="false">
            <div class="items-center  text-white">
                <h1 class="text-5xl font-mono mt-2 text-center">DISCLAIMER</h1>
                <p class="mb-5 indent-8 text-lg text-justify">
                    By using this site, you are doing so at your own risk. In this section, you can only burn your
                    tokens, and this process is irreversible.
                    Any financial decisions you make are strictly your own, and you should not rely on any information
                    presented on this site to make such decisions. We are not responsible for any financial loss,
                    whether direct or indirect, that may arise from your use of the information provided on this
                    website.
                </p>
                <p class="m-2 text-start text-red-300">
                    Tokens with 0 amount are counts for airdrop too, and will be presented only standart tokens. You can
                    use several wallets there is no
                    restrictions. Only Phantom wallet is supported for now. Burn them all!
                </p>
                <Button class="w-full" @click="misc.warningInfo = false">Agree and close</Button>
            </div>
        </Dialog>
        <div class="size-1/6 blur-sm absolute" id="patrol">
            <img src="@/assets/underwater/patrick.gif" class="size-full">
        </div>

        <div v-if="misc.startButton" class="w-full inline-flex justify-center">
            <Button @click.prevent="viewTokenListByUsingWallet" :loading="misc.loadingStartButton"
                style="background-color: transparent; box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);">
                <img src="@/assets/underwater/start-button.gif" class="size-32">
            </Button>
        </div>
        <div v-if="!misc.startButton && tokensData.length > 0" class="absolute top-10 w-full flex flex-col py-12 px-12">
            <transition-group name="list" tag="div">
                <Token v-for="(token, index) in tokensData" :key="token.address" :token="token" :loading="misc.loading"
                    @destroyToken="burnAndCloseAccount(token, index)" />
            </transition-group>
        </div>
        <div v-if="!misc.startButton && tokensData.length == 0"
            class="w-full inline-flex justify-center permanent-marker-regular lg:text-7xl text-5xl text-amber-300">
            <h1>Nothing to burn!</h1>
        </div>

    </div>
    <Toast />
</template>
<script setup>
import { useToast } from "primevue/usetoast"
import Button from 'primevue/button'
import Toast from "primevue/toast"
import Dialog from 'primevue/dialog'
import Token from '@/components/Token.vue'
import Sound from '@/components/Sound.vue'

import mainSound from '@/assets/underwater/main-sound.mp3'
import underwater from '@/assets/underwater/bg-underwater.jpg'

import { CONNECTION } from '@/helpers/data'
import { createCloseInstruction } from '@/helpers/functions'
import http from '@/helpers/http'

import { useWallet } from 'solana-wallets-vue'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { ref, reactive, onMounted } from 'vue'

import { fetchDigitalAsset, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'

const misc = reactive({
    startButton: true,
    loadingStartButton: false,
    loading: false,
    warningInfo: true
})

const { publicKey, sendTransaction, signTransaction } = useWallet();
const toast = useToast()

const tokensData = ref([])


const viewTokenListByUsingWallet = async () => {
    if (!publicKey.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Connect wallet first!', life: 4000 })
        return
    }
    misc.loadingStartButton = true
    const umi = createUmi(CONNECTION).use(mplTokenMetadata())

    let tx = await CONNECTION.getParsedTokenAccountsByOwner(publicKey.value, { programId: TOKEN_PROGRAM_ID }, 'confirmed');

    misc.startButton = false

    for (const el of tx.value) {
        try {
            if (el.account.data.parsed.info.isNative == false && el.account.data.parsed.info.tokenAmount.decimals > 0) {
                await new Promise(resolve => setTimeout(resolve, 500))

                let asset = await fetchDigitalAsset(umi, el.account.data.parsed.info.mint)

                if (asset.metadata) {

                    tokensData.value.push({
                        address: el.pubkey.toString(),
                        token: el.account.data.parsed.info.tokenAmount,
                        mint: el.account.data.parsed.info.mint,
                        metadata: asset.metadata
                    })
                }

            }

        } catch (error) {

            toast.add({ severity: 'info', summary: 'Error', detail: error, life: 2000 })
        }
    }


}

const burnAndCloseAccount = async (token, index) => {
    if (!publicKey.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'You need a weapon, connect wallet first!', life: 4000 })
        return
    }
    let confirmation = confirm('Warning! This procces cannot be canceled! We continue?')

    if (confirmation) {
        misc.loading = true

        let tx = await createCloseInstruction(token, publicKey)

        let sign = await signTransaction.value(tx)
        await sendTransaction(tx, CONNECTION).then(signature => {

            http().post('/api/burned/store',
                { signature: signature, account: token.address, mint: token.mint, name: token.metadata.name, amount: token.token.uiAmountString }).then(success => {
                    toast.add({ severity: 'success', summary: 'Success', detail: 'Entity burned, account closed and result saved', life: 5000 })

                    tokensData.value.splice(index, 1)

                }).catch(error => {
                    toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 5000 })
                })

        }).catch(error => {
            toast.add({ severity: 'error', summary: 'Error', detail: error, life: 4000 })

        })

    } else {
        toast.add({ severity: 'info', summary: 'You are', detail: 'Weakling!', life: 3000 })
    }

    misc.loading = false

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Shadows+Into+Light&display=swap');

.permanent-marker-regular {
    font-family: "Permanent Marker", cursive;
}

::-webkit-scrollbar {

    width: 0px;

    background: transparent;

}


#patrol {
    animation: moveRight 15s linear infinite;
}

@keyframes moveRight {

    0% {
        left: 0%;
    }

    50% {
        left: 50%;
    }

    100% {
        left: 100%;
        width: 0;
        height: 0;

    }
}

.list-enter-active,
.list-leave-active {
    transition: all 2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>