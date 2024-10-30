<template>
    <div class="relative" :style="position">
        <div class="size-16 2xl:size-20" ref="domEl" @mouseenter="handlePauseAnimation"
            @mouseleave="handlePlayAnimation" @click.stop="showDetails = !showDetails">
            <img crossorigin="anonymous" class="rounded-full hover:shadow-lg cursor-pointer hover:scale-105" :src="icon"
                loading="lazy" @error="handleIcon" />
        </div>
        <Sidebar @show="handlePrice()" v-model:visible="showDetails" :showCloseIcon="false" position="right"
            class="bg-contain bg-no-repeat bg-bottom" :style="{ backgroundImage: `url(${fire})` }">
            <div class="flex flex-col backdrop-blur-sm justify-start size-full space-y-2 text-white">
                <div class="inline-flex justify-end">
                    <button
                        class="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
                        @click.prevent="showDetails = false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="size-1/4">
                    <img crossorigin="anonymous" class="rounded-full" :src="icon" loading="lazy" @error="handleIcon" />
                </div>
                <div>
                    <span class="text-sm text-gray-400">address</span>
                    <div class="font-bold text-sm">{{ token.address }}</div>
                </div>
                <div>
                    <span class="text-sm text-gray-400">name</span>
                    <div class="font-semibold text-lg">{{ token.metadata.name }}</div>
                </div>
                <div>
                    <span class="text-sm text-gray-400">amount</span>
                    <div class="font-semibold text-lg">{{ token.token.uiAmount }}</div>
                </div>
                <div>
                    <span class="text-sm text-gray-400">price</span>
                    <div class="font-semibold text-lg">{{ '$' + price }}</div>
                </div>
                <div class="flex justify-end">
                    <Button @click.prevent="emit('destroyToken')" :loading="props.loading" size="large"
                        class="bg-transparent w-full">BURN</Button>
                </div>
            </div>
        </Sidebar>

    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue'
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import axios from 'axios';
import fire from '@/assets/underwater/fire.gif'
import default_icon from '@/assets/default_icon.png'


const props = defineProps({
    token: { type: Object },
    loading: { type: Boolean }
})
const emit = defineEmits(['destroyToken'])

const icon = ref('')
const position = ref({})
const domEl = ref()
const price = ref(undefined)
const showDetails = ref(false)

onMounted(() => {
    setStyle()
    setIcon()
    setAnimation()
})

function handlePauseAnimation() {
    let pause = domEl.value.getAnimations()
    pause[0].pause()
}

function handlePlayAnimation() {
    let play = domEl.value.getAnimations()
    play[0].play()
}

function handleIcon() {
    icon.value = default_icon
}

function handlePrice() {
    if (price.value == undefined) {
        axios.get('https://api.dexscreener.com/latest/dex/tokens/' + props.token.mint).then(success => {
            price.value = success.data.pairs ? success.data.pairs[0].priceUsd : '0'

        })
    }
}

function setStyle() {
    let posX = Math.floor(Math.random() * 93)
    position.value = { transform: `translate(${posX}%, 0%)` }
}



function setAnimation() {

    const keyframes = [
        { transform: 'translate(0px, -0px)' },
        { transform: 'translate(-30px, -20px)' },
        { transform: 'translate(40px, 0)' }
    ];

    let range = { min: 4000, max: 12000 }
    let delta = range.max - range.min
    let duration = Math.round(range.min + Math.random() * delta)

    if (domEl.value) {

        domEl.value.animate(keyframes, { duration: duration, iterations: Infinity, easing: 'ease-in-out', direction: 'alternate', delay: 500 })
    }

}

function setIcon() {

    let imageUrl = props.token.metadata.uri

    if (imageUrl != '') {

        axios.get(imageUrl).then(success => {
            icon.value = success.data.image
        }).catch(error => {
            console.error(error)
        })
    }
}



</script>
<style scoped></style>