<template>
    <div class="2xl:w-4/5 mx-auto pt-44">
        <div class="font-mono text-start text-2xl">
            <h1>$CLAMS on Solana</h1>
            <TextAnimation :originalText="originalText" @animation-complete="showOtherContent = true" />
        </div>
    </div>

    <section v-if="showOtherContent"
        class=" 2xl:w-4/5 mx-auto space-y-7 py-36 font-medium text-2xl indie-flower-regular animate-fade-in select-none">
        <div class="flex justify-between text-center my-5 w-full">
            <img :src="planet" alt="Margarita the Snail"
                class="levitating-box rounded-full shadow-2xl float-left w-2/6 md:w-1/4">

            <p class="w-1/2 md:w-3/4">

                In any habitat, whether it's nature with living organisms or a blockchain with tokens, there should be a
                kind of "cleaners" who ensure proper functioning and sanitation. Failure to provide these aspects can
                lead to deterioration of the entire system (or not). Especially when meme season began, this question is
                more relevant than ever.

            </p>
        </div>
        <div class="flex justify-between text-center my-5 w-full">
            <p class="w-1/2 md:w-3/4">
                Currently, on the Solana blockchain, there are approximately <a
                    href="https://www.dextools.io/app/en/solana/gainers" class="underline">~270,000
                    tokens</a>, which is about ~10% of the
                total number of tokens across all blockchains. According to Solana's documentation, each entity on the
                blockchain has a unique account linked to the token owner's address.
            </p>
            <div class="cube-container float-right ">

                <div class="cube">

                    <div class="face front"></div>
                    <div class="face back"></div>
                    <div class="face right"></div>
                    <div class="face left"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                </div>
            </div>
        </div>
        <div class="flex text-center my-5 w-full">
            <img :src="snail_1" alt="Cerithiidae" class="float-right w-1/2 md:w-1/4 mx-auto">
            <p class="w-1/2 md:w-3/4">
                The creators of Solana have implemented the ability within the blockchain to burn tokens and, if
                necessary, close accounts associated with those tokens. This can occur automatically through the garbage
                collector, a process designed to help reduce network-wide storage of unused or deprecated data, or it
                can be initiated by running a specific program when needed.
            </p>
        </div>
        <div class="flex justify-center text-center w-full">
            <p class="w-1/2 md:w-3/4">
                Let's not delve into details or give lectures on how the Solana blockchain works, all comprehensive
                information is available in the <a href="https://solana.com/docs" class="underline">documentation</a>.
                Let's get straight to the point.
            </p>
        </div>
        <div class="flex-row justify-center items-center text-center w-full">
            <img :src="scallop" alt="Cerithiidae" class="w-1/2 md:w-1/4 mx-auto">
            <p>
                Our idea is to launch a campaign for cleaning and burning entities that have no value. You
                engage in activities, burn tokens, close accounts, and thereby purchase landing spots in the $CLAMS
                airdrop.
            </p>
            <p>No public or private sales, no investors, all based solely on the organic activity
                of your participation.</p>
            <p>All actions will be accompanied by fictional stories and narratives to maintain the ambiance. If you're
                ready, let's move on to the <strong class="underline cursor-pointer"
                    @click="$router.push('/mission')">first mission!</strong></p>
        </div>

    </section>
    <div v-show="showOtherContent" class="w-full mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <p class="text-gray-800  leading-relaxed">
            <span class="font-semibold">Disclaimer:</span>
            The information provided on this website is for entertainment purposes only. It is not
            intended as legal, financial, or professional advice. Any actions taken based on this information are at
            your
            own risk. We make no representations or warranties of any kind regarding the completeness, accuracy,
            reliability, suitability, or availability of the content. We will not be liable for any losses,
            injuries, or
            damages from the use or reliance on this information. Always seek the advice of qualified professionals
            regarding specific issues or concerns.
        </p>
    </div>

</template>
<script setup>
import TextAnimation from '@/animations/TextAnimation.vue'
import snail_1 from '@/assets/OIP.png'
import planet from '@/assets/planet.png'
import scallop from '@/assets/scallop.png'




import { ref } from 'vue'

const originalText = "Join our campaign to clean up the crypto-ocean and defeat the pollutants! Let's make waves and protect our solana environment together!";
const showOtherContent = ref(false)
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Yarndings+12+Charted&display=swap');

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 2s ease-out;
}

.indie-flower-regular {
    font-family: "Indie Flower", cursive;
}


.levitating-box {

    animation: levitate 2s ease-in-out infinite alternate;
    /* Анимация "levitate" */
}

/* Ключевая анимация "levitate" */
@keyframes levitate {
    0% {
        transform: translateY(0);
        /* Начальное положение (нет смещения) */
    }

    100% {
        transform: translateY(-10px);
        /* Конечное положение (смещение вверх на 10px) */
    }
}


.cube-container {
    width: 200px;
    height: 300px;
    perspective: 800px;
    /* Устанавливаем перспективу */
}

.cube {
    width: 100%;
    height: 100%;


    position: relative;
    transform-style: preserve-3d;
    /* Задаем стиль 3D трансформации */
    animation: rotateCube 25s linear infinite;
    /* Анимация вращения */
}

.face {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgb(0, 0, 0);
    /* Цвет граней куба */
    border: 1px solid rgba(42, 10, 129, 0.9);
    /* Обводка граней куба */
    display: flex;
    justify-content: center;
    background-image: url('/src/assets/solana_logo.png');
    background-size: cover;
    align-items: center;
    font-size: 24px;
    color: white;
    font-weight: bold;
}

/* Анимация вращения куба */
@keyframes rotateCube {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }

    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

/* Расставляем грани куба */
.front {
    transform: translateZ(100px);
}

.back {
    transform: rotateY(180deg) translateZ(100px);
}

.right {
    transform: rotateY(90deg) translateZ(100px);
}

.left {
    transform: rotateY(-90deg) translateZ(100px);
}

.top {
    transform: rotateX(90deg) translateZ(100px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(100px);
}
</style>