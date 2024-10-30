<template>
    <div class="static indie-flower-regular">
        <div class="min-h-screen flex flex-col justify-center bg-slate-800">
            <img src="@/assets/home/bg-clam.jpg" class="absolute blur-md h-screen w-full object-fill"
                fetchpriority="high">
            <div class="flex text-center items-center justify-center pt-16 z-10 permanent-marker-regular">
                <h1 class="text-9xl text-lime-400 font-black">The Clam</h1>
            </div>
            <div class="text-5xl md:text-7xl font-semibold text-center text-rose-500 animate-pulse pt-32 ">
                <text-animation></text-animation>
            </div>
            <div class="flex flex-row justify-center items-center translate-y-7 ">
                <a href="https://twitter.com/solanas_clams" class="cursor-pointer hover:scale-105"><img
                        src="@/assets/home/twitter.png"></a>
                <a href="https://t.me/solanas_clams" class="cursor-pointer hover:scale-105"><img
                        class="bg-white rounded-lg size-1/2" src="@/assets/home/telegram.png"></a>
            </div>
            <img src="@/assets/home/border.png" class="absolute bottom-0 w-full h-10 object-cover">
        </div>
        <div class="relative min-h-screen bg-slate-950 flex items-center justify-center">
            <img src="@/assets/home/bg-meme.png" class="absolute h-screen w-full object-fill">
            <div class="z-50 text-5xl lg:text-9xl text-center text-white permanent-marker-regular"
                v-animateonscroll="{ enterClass: 'fadeIn', leaveClass: 'fadeOut' }">
                <h1>classic?</h1>
            </div>
            <img src="@/assets/home/border.png" class="absolute bottom-0 w-full h-10 object-cover">
        </div>
        <div class="relative min-h-screen bg-slate-950 flex items-center justify-center text-center">
            <img src="@/assets/home/callboard.jpg" class="absolute blur-sm h-screen w-full object-fill">
            <div :style="{ backgroundImage: `url(${fire})` }"
                class="text-7xl text-black font-black absolute top-28 bg-center">
                Solana needs a new hero!
            </div>
            <div class="z-50 pt-12 text-5xl flex flex-col items-center text-amber-500 permanent-marker-regular"
                v-animateonscroll="{ enterClass: 'fadeIn', leaveClass: 'fadeOut' }">
                <img src="@/assets/home/clam-man.png" class="levitate">
                <p class="bg-black rounded-full p-4 ">save the Solana, burn them all!</p>
            </div>
            <img src="@/assets/home/border.png" class="absolute bottom-0 w-full h-10 object-cover">
        </div>
        <div class="relative min-h-screen bg-slate-950 flex items-center justify-center">
            <img src="@/assets/home/bg-burn.gif" class="absolute -bottom-2 h-screen w-full object-fill">
            <div v-animateonscroll="{ enterClass: 'fadeIn', leaveClass: 'fadeOut' }">
                <img src="@/assets/home/cloud.png" class="absolute lg:left-12 left-0 top-0 lg:w-1/5 w-1/3">
            </div>
            <div v-animateonscroll="{ enterClass: 'fadeIn', leaveClass: 'fadeOut' }">
                <img src="@/assets/home/person.png" class="absolute bottom-32 lg:w-1/4 w-1/2 hue-rotate-30">
            </div>
            <img src="@/assets/home/border.png" class="absolute bottom-0 w-full h-12 object-cover">
        </div>
        <div class="relative min-h-screen bg-slate-950 flex items-center justify-center text-white">
            <img src="@/assets/home/bg-map.jpg" class="absolute blur-md h-screen w-full object-fill">
            <div class="absolute md:top-1/4 top-0 grid grid-cols-2 gap-14 content-center md:text-5xl text-2xl ">
                <div>
                    <h2 class="text-center font-semibold mb-12">Clams population</h2>
                    <div class="flex flex-col text-black text-center space-y-6">
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Total Supply</h3>
                            <p class="text-2xl">1 billion CLAMS</p>
                        </div>
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Initial Distribution</h3>
                            <p class="text-2xl">90% rewards | 10% dex/cex liquidity</p>
                        </div>
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Token address</h3>
                            <p class="text-2xl">TBD</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="pb-12 text-5xl font-semibold">Some Road</h2>
                    <div class="space-y-2 border-l-2 border-dashed">
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">10,000 burns</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">Users make 10,000 burns - first liquidity for
                                    project.</p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">launch</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">Mint main token, claimable airdrop to all users
                                    who burn
                                    at
                                    least one entity.</p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">Marketing and community space</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">Do everything possible to increase the project's
                                    visibility and grow the community.</p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">100,000 burns</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">second point of burns, grab liquidity for next
                                    move.
                                </p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">TBD</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="@/assets/home/border.png" class="absolute bottom-0 w-full h-12 object-cover">
        </div>
        <div
            class="relative min-h-screen bg-slate-950 flex items-center justify-center text-center permanent-marker-regular">
            <img src="@/assets/home/bg-end.jpg" class="absolute blur-md h-screen w-full object-fill">
            <div class="text-5xl p-5 rounded-lg bg-black text-lime-300 font-black absolute top-32 bg-center">
                How to earn?
            </div>
            <div v-animateonscroll="{ enterClass: 'fadeIn', leaveClass: 'fadeOut' }"
                class="md:text-5xl text-3xl p-5 rounded-md text-black font-black z-10">
                <ul>
                    <li>1. Go to the clam station page.</li>
                    <li>2. connect your Phantom wallet.</li>
                    <li>3. burn zero-value tokens.</li>
                    <li>4. wait for the announcement, and claim airdrop.</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script setup>
import TextAnimation from '@/animations/TextAnimation.vue'
import fire from '@/assets/home/fire.gif'



</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Yarndings+12+Charted&display=swap');

.permanent-marker-regular {
    font-family: "Permanent Marker", cursive;
}


.indie-flower-regular {
    font-family: "Indie Flower";
}


@keyframes levitate {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.levitate {
    animation: levitate 3s ease-in-out infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.fadeIn {
    animation: fadeIn 2s ease-in-out;
}

.fadeOutLeft {
    animation: fadeOutLeft 2s 0.15s ease-in-out;
}
</style>