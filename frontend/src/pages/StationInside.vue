<template>
    <img :src="stationInside" class="absolute top-0 left-0 h-screen w-full object-fill blur-sm" fetchpriority="high">
    <Sound :audio="mainSound" />
    <div class="absolute top-1/3 flex justify-evenly w-full">
        <div @click.prevent="handleOverall()" class="group cursor-pointer text-center relative w-1/5 md:h-44 h-28">
            <img class="size-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                src="@/assets/station-inside/matrix.gif" alt="Overall progress">
            <p class="text-2xl mt-4 opacity-0 font-mono group-hover:opacity-50 bg-black text-amber-300">Overall Progress
            </p>
        </div>
        <div class="group text-center relative w-1/5 md:h-44 h-28">
            <img class="size-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                src="@/assets/station-inside/screen-1.jpg" alt="Clam organization">

        </div>
        <div @click.prevent="handleScore()" class="group cursor-pointer text-center relative w-1/5 md:h-44 h-28">
            <img class="size-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                src="@/assets/station-inside/screen-2.gif" alt="Score">
            <p class="text-2xl mt-4 opacity-0 font-mono group-hover:opacity-50 bg-black text-amber-300">Personal score
            </p>
        </div>
    </div>
    <Toast />

    <Dialog v-model:visible="misc.modalVisible" modal :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        header="STATISTIC" unstyled :pt="{
            root: { class: 'bg-emerald-600 p-4 rounded border-0 flex gap-2' }
        }">
        <div class="flex flex-col text-center justify-between text-2xl font-mono space-y-12 text-amber-300">
            <div>
                According to first target, overall progress is at <strong>{{ misc.burnsCount }}/10000</strong>
            </div>
            <ProgressBar :value="misc.progressScore" :showValue="false"></ProgressBar>
            <div v-show="misc.personalScore >= 0">
                Tokens fallen from your hands - <strong>{{ [misc.personalScore] }}</strong>
            </div>
        </div>
    </Dialog>

</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useWallet } from 'solana-wallets-vue'
import { useToast } from 'primevue/usetoast';
import http from '@/helpers/http'
import Toast from 'primevue/toast'
import Dialog from 'primevue/dialog'
import ProgressBar from 'primevue/progressbar';
import Sound from '@/components/Sound.vue'


import stationInside from '@/assets/station-inside/bg.jpg'
import mainSound from '@/assets/station-inside/main-sound.mp3'

const toast = useToast()
const { publicKey } = useWallet()
const misc = reactive({
    modalVisible: false,
    burnsCount: undefined,
    personalScore: undefined,
    progressScore: undefined
})


function handleOverall() {
    misc.modalVisible = true


    if (misc.burnsCount == undefined) {
        http().get('/api/overall').then(success => {
            misc.burnsCount = success.data.count
            misc.progressScore = success.data.count / 10000 * 100
        })
    }

}

function handleScore() {
    if (!publicKey.value) {
        toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Unauthorized', life: 3000 })
        return
    }

    handleOverall()

    if (misc.personalScore == undefined) {
        http().get('/api/score').then(success => {
            misc.personalScore = success.data.score
        })
    }
}



</script>
<style scoped></style>