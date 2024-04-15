<template>
    <div>
        <nav class="w-full flex fixed z-50 top-0 left-0 flex-row justify-center items-center content-center shadow-md">
            <div class="w-11/12 py-0 flex flex-row justify-between items-center content-center">
                <div class="flex flex-row justify-start items-center content-center space-x-5">

                    <Logo :image="snailLogo" @click="$router.push('/')" class="" />

                    <button @click="$router.push('/mission')"
                        class="inline-flex font-mono items-center justify-center px-6 py-3 border border-transparent font-semibold rounded-md text-white bg-black hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        First Mission
                    </button>


                </div>
                <div class="flex flex-row justify-end items-center space-x-5 content-center">

                    <button
                        class="inline-flex font-mono items-center justify-center px-8 py-3 border border-transparent font-semibold rounded-md text-white bg-black"
                        @click.prevent="viewTokenListForAirdrop">Test tokens</button>
                    <wallet-multi-button dark></wallet-multi-button>
                </div>
            </div>
        </nav>
    </div>
    <transition name="modal-fade">
        <test-token-airdrop-modal v-show="modalVisible" @close="modalVisible = false"
            :airdropData="airdropData"></test-token-airdrop-modal>
    </transition>
</template>
<script setup>
import Logo from '@/animations/Logo.vue'
import snailLogo from '@/assets/snail-logo.png'
import TestTokenAirdropModal from '@/components/TestTokenAirdropModal.vue';
import "solana-wallets-vue/styles.css";

import { CONNECTION, AIRDROP_WALLET_SIGNER } from '@/helpers/data'
import { viewAllTokensByOwner } from '../helpers/functions';

import http from '@/helpers/http'

import { watch, ref } from 'vue';
import { initWallet, WalletMultiButton, useWallet } from 'solana-wallets-vue'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";




initWallet({ wallets: [new PhantomWalletAdapter()], cluster: 'devnet', autoConnect: true })

const { publicKey } = useWallet()

const modalVisible = ref(false)
const airdropData = ref([])

const viewTokenListForAirdrop = async () => {
    if (!publicKey.value) {
        alert('connect wallet first!')
        return
    }

    if (airdropData.value.length == 0) {

        airdropData.value = await viewAllTokensByOwner(AIRDROP_WALLET_SIGNER.publicKey, CONNECTION)
    }

    modalVisible.value = true
}




function initToken(value) {
    http().post('http://localhost/api/token/create', { address: value.toString() }).then(success => {
        localStorage.setItem('token', JSON.stringify({ address: value.toString(), token: success.data.token }))
    }).catch(error => {
        alert(error)
    })
}


watch(publicKey, (key) => {

    if (key != null && localStorage.getItem('token') == null) {
        initToken(key)
    }

    if (localStorage.getItem('token') != null) {

        let tokenAddress = JSON.parse(localStorage.getItem('token'))


        if (key != null && tokenAddress.address != key.toString()) {
            localStorage.removeItem('token')
            initToken(key)

            location.reload()
        }
    }
})





</script>
<style></style>