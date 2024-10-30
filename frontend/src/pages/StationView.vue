<template>
    <section class="h-screen flex flex-col justify-end bg-blue-200 overflow-hidden">
        <div :style="{ backgroundImage: `url(${cloud})` }" class="h-1/2 bg-repeat-x"></div>
        <Sound :audio="wavesSound" />
        <div class="station flex flex-row justify-evenly items-center bg-bottom md:bg-repeat-x"
            :style="{ backgroundImage: `url(${waves})` }">
            <div class="group relative cursor-pointer" @click.prevent="handleStation()">
                <p class="text-3xl opacity-0 font-mono text-center group-hover:opacity-50">
                    Clam Headquarters</p>
                <img src="@/assets/station/station-top.png" alt="station"
                    class="size-5/6 transition duration-300 transform group-hover:scale-105 hover:contrast-150">
            </div>
            <div class="submarine relative group content-end cursor-pointer" @click.prevent="handleSubmarine()">
                <p class="text-3xl opacity-0 font-mono text-center group-hover:opacity-50">
                    vehicle for hunting</p>
                <img src="@/assets/station/submarine.png" alt="sub"
                    class="size-5/6 transition duration-300 transform group-hover:scale-105 hover:contrast-150">
            </div>
        </div>
    </section>
</template>
<script setup>
import ClosedDoorSound from '@/assets/station/closed-door.mp3'
import cloud from '@/assets/station/cloud.gif'
import waves from '@/assets/station/waves.gif'
import wavesSound from '@/assets/station/waves.mp3'
import Sound from '@/components/Sound.vue'

import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const misc = reactive({
    startEvent: Object,
    closedDoor: Object
})

function handleStation() {
    misc.closedDoor.play()
    router.push('/station-inside')

}

function handleSubmarine() {
    router.push('/incinerator')
}

onMounted(() => {
    misc.closedDoor = new Audio(ClosedDoorSound)
})

</script>
<style scooped>
.submarine {
    animation: drift 2s infinite ease alternate;
}

@media only screen and (max-width: 480px) {
    .station {
        background-size: contain;
    }
}

@keyframes drift {
    0% {
        transform: translateY(-2%);
    }

    100% {
        transform: translateY(2%);
    }
}
</style>