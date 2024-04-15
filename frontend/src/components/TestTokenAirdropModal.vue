<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <!-- background -->
            <div class="fixed inset-0 transition-opacity" @click="emit('close')" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- content -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div
                class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <!-- text -->
                    <div>
                        <label for="select" class="block text-xl font-semibold pb-4">Select
                            token
                            to
                            airdrop:</label>
                        <!-- Input select -->
                        <select v-model="tokenToAirdrop" id="select"
                            class="h-10 w-full text-center border-2 border-black sm:text-lg font-medium rounded-md">
                            <option v-for="(token, index) in props.airdropData" :key="index" :value="index">{{
                                token.metadata.symbol }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- button -->
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="transferAirdrop" type="button"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600  text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm">
                        fullsend.exe
                    </button>
                    <button @click.prevent="emit('close')" type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:text-sm">
                        I dont need that
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { getOrCreateAssociatedTokenAccount, transferChecked } from '@solana/spl-token';

import { useWallet } from 'solana-wallets-vue';
import { CONNECTION, AIRDROP_WALLET_SIGNER } from '@/helpers/data'
import { createPublicKeyInstance } from '@/helpers/functions'
const { publicKey } = useWallet()

const emit = defineEmits(['close'])

const props = defineProps({
    airdropData: {
        type: Array
    }
})

const tokenToAirdrop = ref(0)


const transferAirdrop = async () => {

    let tokenAttribute = props.airdropData[tokenToAirdrop.value]

    if (tokenAttribute == null || !publicKey.value) {
        alert('wallet not detected!')
        return
    }

    let amount = 100 * Math.pow(10, tokenAttribute.token.decimals)

    try {

        let toTokenAddress = await getOrCreateAssociatedTokenAccount(CONNECTION, AIRDROP_WALLET_SIGNER, createPublicKeyInstance(tokenAttribute.metadata.mint), publicKey.value)
        let fromAccoutAddress = await getOrCreateAssociatedTokenAccount(CONNECTION, AIRDROP_WALLET_SIGNER, createPublicKeyInstance(tokenAttribute.metadata.mint), AIRDROP_WALLET_SIGNER.publicKey)

        await transferChecked(
            CONNECTION,
            AIRDROP_WALLET_SIGNER,
            fromAccoutAddress.address,
            createPublicKeyInstance(tokenAttribute.metadata.mint),
            toTokenAddress.address,
            AIRDROP_WALLET_SIGNER,
            amount,
            tokenAttribute.token.decimals
        ).then(success => {
            alert('TX: ' + success)
        })
    } catch (error) {
        alert(error)
    }


    emit('close')
}

</script>
<style scoped>
.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: 0.25s ease all;
}
</style>