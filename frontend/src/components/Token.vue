<template>

    <div class="relative" :style="position">

        <div class="size-16 2xl:size-20" ref="domEl" @mouseenter="handlePauseAnimation"
            @mouseleave="handlePlayAnimation" @click.stop="showDetails = !showDetails">
            <img class="rounded-full hover:shadow-lg cursor-pointer hover:scale-105 " :src="icon" loading="lazy"
                alt="Token Icon" />
        </div>
        <div v-if="showDetails" class="absolute bottom-5 z-50 bg-white border border-gray-300 p-4 shadow-lg rounded-lg">

            <div class="flex justify-end">
                <button
                    class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
                    @click.prevent="showDetails = !showDetails">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="size-12 2xl:size-16">
                <img class="rounded-full hover:shadow-lg cursor-pointer hover:scale-105 " :src="icon" loading="lazy"
                    alt="Token Icon" />
            </div>
            <div>
                <span class="text-xs text-gray-500">address</span>
                <div class="font-semibold text-sm">{{ token.address }}</div>
            </div>
            <div>
                <span class="text-xs text-gray-500">name</span>
                <div class="font-semibold text-base">{{ token.metadata.name }}</div>
            </div>
            <div>
                <span class="text-xs text-gray-500">amount</span>
                <div class="font-semibold text-base">{{ token.token.uiAmount }}</div>
            </div>
            <div class="flex justify-end">
                <button @click.prevent="emit('destroyToken')"
                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <span>burn</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';

const props = defineProps({
    token: { type: Object },
})
const emit = defineEmits(['destroyToken'])

const icon = ref('')
const position = ref({})
const domEl = ref()
const showDetails = ref(false)

onMounted(() => {
    setStyle()
    setIcon()
    setAnimation()
})

function setStyle() {
    let posX = Math.floor(Math.random() * 82)
    position.value = { transform: `translate(${posX}%, 0%)` }
}


function handlePauseAnimation() {
    let pause = domEl.value.getAnimations()
    pause[0].pause()
}

function handlePlayAnimation() {
    let play = domEl.value.getAnimations()
    play[0].play()
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
<style></style>