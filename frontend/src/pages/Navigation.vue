<template>
    <div>
        <nav class="w-full flex fixed z-50 top-0 left-0 items-center justify-around content-center shadow-md">
            <div class="main w-11/12 py-0 flex flex-row justify-between items-center content-center">
                <div class="flex flex-row justify-start items-center content-center space-x-5">
                    <Logo :image="snailLogo" @click="$router.push('/')"
                        class="w-24 rounded-full cursor-pointer hover:scale-110" />
                </div>
                <div class="flex flex-row justify-end items-center space-x-5 content-center">
                    <button @click="$router.push('/station')"
                        class="inline-flex items-center justify-center px-6 py-3 border border-transparent font-semibold rounded-md text-white bg-black hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Clam station
                    </button>

                    <wallet-multi-button dark></wallet-multi-button>
                </div>
            </div>
            <div class="alter md:hidden">
                <button @click="mobileToggle = !mobileToggle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div v-show="mobileToggle == true" class="absolute text-center right-10 flex flex-col">
                    <button @click.prevent="$router.push('/station'), mobileToggle = false"
                        class="px-4 py-2 font-medium rounded-md text-black bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mb-2">
                        Clam station
                    </button>

                    <wallet-multi-button dark></wallet-multi-button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>

import Logo from '@/animations/Logo.vue'

import snailLogo from '@/assets/scallop.png'

import "solana-wallets-vue/styles.css";

import http from '@/helpers/http'

import { watch, ref } from 'vue';
import { initWallet, WalletMultiButton, useWallet } from 'solana-wallets-vue'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";


initWallet({ wallets: [new PhantomWalletAdapter()], cluster: 'mainnet-beta', autoConnect: true })

const { publicKey } = useWallet()

const mobileToggle = ref(false)


function initToken(value) {
    http().post('/api/token/create', { address: value.toString() }).then(success => {
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
<style scoped>
@media only screen and (max-width: 480px) {
    .main {
        display: none;
        visibility: hidden;
    }
}
</style>