<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div class="fixed inset-0 transition-opacity" @click="emit('close')" aria-hidden="true">
                <Toast />
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div
                class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                    <div>
                        <label for="select" class="block text-xl font-semibold pb-4">Select
                            token
                            to
                            airdrop:</label>

                        <select v-model="tokenToAirdrop" id="select"
                            class="h-10 w-full text-center border-2 border-black sm:text-lg font-medium rounded-md">
                            <option v-for="(token, index) in props.airdropData" :key="index" :value="index">{{
                                token.metadata.symbol }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="bg-gray-100 flex flex-row justify-center py-3 px-3 md:space-x-12 space-x-5">
                    <Button type="button" label="I dont need that" severity="secondary"
                        @click.prevent="emit('close')" />
                    <Button @click.prevent="transferAirdrop" type="button" :loading="loadingBtn.submit"
                        label="fullsend.exe" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useToast } from "primevue/usetoast";
import { ref, reactive } from 'vue'
import Toast from "primevue/toast";
import Button from 'primevue/button';
import { TOKEN_PROGRAM_ID, createTransferCheckedInstruction, getOrCreateAssociatedTokenAccount } from '@solana/spl-token';

import { useWallet } from 'solana-wallets-vue';
import { CONNECTION, AIRDROP_WALLET_SIGNER } from '@/helpers/data'
import { createPublicKeyInstance } from '@/helpers/functions'
import { Transaction, sendAndConfirmTransaction } from '@solana/web3.js';


const { publicKey } = useWallet()
const toast = useToast()
const emit = defineEmits(['close'])

const loadingBtn = reactive({
    submit: false,
    cancel: false
})

const props = defineProps({
    airdropData: {
        type: Array
    }
})

const tokenToAirdrop = ref(0)

const transferAirdrop = async () => {

    let tokenAttribute = props.airdropData[tokenToAirdrop.value]

    if (tokenAttribute == null || !publicKey.value) {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Connect wallet first!', life: 4000 })
        return
    }

    loadingBtn.submit = true

    let amount = 100 * Math.pow(10, tokenAttribute.token.decimals)

    try {

        let toTokenAddress = await getOrCreateAssociatedTokenAccount(CONNECTION, AIRDROP_WALLET_SIGNER, createPublicKeyInstance(tokenAttribute.metadata.mint), publicKey.value)
        let fromAccoutAddress = await getOrCreateAssociatedTokenAccount(CONNECTION, AIRDROP_WALLET_SIGNER, createPublicKeyInstance(tokenAttribute.metadata.mint), AIRDROP_WALLET_SIGNER.publicKey)


        let tx = new Transaction().add(createTransferCheckedInstruction(
            fromAccoutAddress.address,
            createPublicKeyInstance(tokenAttribute.metadata.mint),
            toTokenAddress.address,
            AIRDROP_WALLET_SIGNER.publicKey,
            amount,
            tokenAttribute.token.decimals,
            [],
            TOKEN_PROGRAM_ID
        ))

        await sendAndConfirmTransaction(CONNECTION, tx, [AIRDROP_WALLET_SIGNER])

        toast.add({ severity: 'success', summary: 'Success', detail: 'Test tokens has been sent', life: 4000 })
        loadingBtn.submit = false

    } catch (error) {
        alert(error)
        loadingBtn.submit = false
    }
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