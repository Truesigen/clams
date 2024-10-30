<template>
    <audio ref="audio" :src="$props.audio" preload="auto" loop volume="0.3"></audio>
    <div class="absolute z-10 left-5 bottom-5 cursor-pointer">
        <div class="w-16" v-if="!audioOn" @click.prevent="handleAudio()">
            <img src="@/assets/station/audio-off.png">
        </div>
        <div class="w-16" v-else @click.prevent="handleAudio()">
            <img src="@/assets/station/audio-on.png">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'


defineProps({
    audio: {
        type: String,
        required: true
    }
})

const audioOn = ref(true)
const audio = ref()

function handleAudio() {
    if (audio.value.paused) {
        audio.value.play()
        audioOn.value = true
    } else {
        audio.value.pause()
        audioOn.value = false
    }
}


</script>
<style></style>