<template>
    <div class="static">
        <div class="min-h-screen flex flex-col justify-center bg-slate-800">
            <img src="@/assets/home/genius.jpg" class="absolute blur-md h-screen w-full object-fill">
            <div class="flex text-center items-center justify-center pt-16 z-10 permanent-marker-regular">


                <h1 class="text-9xl text-lime-400">The Clam</h1>


            </div>
            <div class="text-5xl md:text-7xl font-semibold text-center text-rose-500 animate-pulse pt-32 ">
                <text-animation></text-animation>
            </div>
            <div class="flex flex-row justify-center items-center translate-y-7 ">
                <a href="https://twitter.com/solanas_clams" class="cursor-pointer hover:scale-105"><img
                        src="@/assets/home/twitter.png"></a>
                <a href="#" class="cursor-pointer hover:scale-105"><img class="bg-white rounded-lg size-1/2"
                        src="@/assets/home/telegram.png"></a>
            </div>

        </div>
        <div class="relative h-screen font-medium md:text-3xl text-xl flex flex-col
            items-center justify-center bg-slate-800">
            <img src="@/assets/home/bg-2.jpg" class="absolute h-screen w-full object-fill blur-md">
            <div class="absolute top-12 left-0 flex flex-row text-center">
                <img src="@/assets/home/clam-detail.jpg" class="float-right size-1/4 rounded-full">
                <p class="content-center">Clams are such fun and diverse creatures underwater
                    that it
                    sometimes
                    seems like
                    they hide their best jokes in their shells! They can be as tiny as snails or as large as clams -
                    size
                    matters when it comes to underwater fashion!
                    But their main superpower is their ability to clean water like busy underwater janitors. And the
                    most
                    interesting thing is their passion for cultural events! Clams often throw underwater concerts
                    featuring shell instruments and celebrate deep-sea parties.</p>
            </div>
            <div class="absolute bottom-12 right-0 flex flex-row text-center">
                <p class="content-center">In any habitat, whether it's nature with living
                    organisms
                    or
                    a
                    blockchain with tokens, there should
                    be a
                    kind of "cleaners" who ensure proper functioning and sanitation. Such cleaners are known in nature,
                    what about Solana?</p>
                <img src="@/assets/home/clam-maid.png" class="float-left size-1/4">
            </div>

        </div>
        <div
            class="relative top-0 h-screen font-medium md:text-3xl text-xl flex flex-col items-center justify-center bg-gradient-to-r from-lime-600 to-neutral-800 text-white">
            <div class="absolute content-center items-center">
                <div class="cube-container">
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
            <div class="absolute top-24 w-1/2 text-center">
                <p>We launch an initiative focused on eliminating entities that have no value. Through activities such
                    as token burning, account closures, you will earn $CLAMS.</p>
            </div>
            <div class="absolute bottom-8 left-32">
                <img src="@/assets/home/magic-clam.png" class="size-11/12">
            </div>

        </div>
        <div
            class="relative top-0 h-screen font-medium md:text-3xl text-xl grid grid-cols-3 items-center bg-gradient-to-r from-lime-600 to-blue-600 text-white">
            <div class="col-span-3 text-center text-5xl">Central protagonists in this saga</div>
            <div class="flex flex-col text-center items-center">
                <h1 class="text-5xl">Clam</h1>
                <p>worker, main currency</p>
                <img src="@/assets/home/regular-clam.png" class="size-2/3">
            </div>
            <div class="flex flex-col text-center items-center">
                <h1 class="text-5xl">Poseidon</h1>
                <p>clams boss, idea creator, designer, developer, simple guy</p>
                <img src="@/assets/home/dev.png" class="size-2/3">
            </div>
            <div class=" flex flex-col text-center items-center">
                <h1 class="text-5xl">Users</h1>
                <p>value driver</p>
                <img src="@/assets/home/users.gif" class="size-2/3">
            </div>
        </div>
        <div
            class="sticky top-0 h-screen font-medium md:text-3xl text-xl flex flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-emerald-600 text-white">
            <div class="absolute md:top-1/4 top-0 grid grid-cols-2 gap-14 content-center md:text-5xl text-2xl">
                <div>
                    <h2 class="text-black  text-center font-semibold mb-12">Clams population</h2>
                    <div class="flex flex-col text-black text-center space-y-6">
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Total Supply</h3>
                            <p class="text-2xl">2 billions CLAMS</p>
                        </div>
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Initial Distribution</h3>
                            <p class="text-2xl">80% rewards | 10% liquidity | 10% reserved</p>
                        </div>
                        <div class="p-2 bg-white rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold mb-2">Token address</h3>
                            <p class="text-2xl">TBD</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <h2 class="pb-12 text-5xl">Some Road</h2>
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
                                <h4 class="font-bold">100,000 burns</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">second point of burns, grab liquidity for next
                                    move.
                                </p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">NFT launch</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">Designing and minting an NFT
                                    collection.</p>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="ml-6">
                                <h4 class="font-bold">Surviving</h4>
                                <p class="mt-2 max-w-screen-sm text-lg">Tring to avoid, when clams get coocked.</p>
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
        </div>

        <div
            class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-neutral-800 to-amber-600 text-white">
            <section class=" static top-0 w-1/2 font-mono text-gray-100 py-28 display-none overflow-y-auto">
                <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions
                    </h2>
                    <div class="flex  flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">When
                                launch?
                            </summary>
                            <div class="px-4 indent-8 pb-4">
                                <p>as soon as possible</p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">Who is elligble for
                                reward?</summary>
                            <div class="px-4 indent-8 pb-4">
                                <p>All users who burn and close at least one entity.</p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">When I can claim reward?
                            </summary>
                            <div class="px-4 indent-8 pb-4">
                                <p>For the launch phase, we need to carry out at least 10000 burns, after
                                    this mark all participants will be able to claim the airdrop, there will be a
                                    separate page on our website.</p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">How it works?</summary>
                            <div class="px-4 indent-8 pb-4">
                                <p>The creators of Solana have implemented the ability within the blockchain to burn
                                    tokens and close accounts associated with those tokens and owners. This can occur
                                    automatically through the garbage
                                    collector, a process designed to help reduce network-wide storage of unused or
                                    deprecated data, or it
                                    can be initiated by running a specific program when needed.</p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">There are will be public
                                or private sales?</summary>
                            <div class="px-4 indent-8 pb-4">
                                <p>Our idea does not provide for this, since by burning and closing accounts the
                                    remaining balance, which is intended to pay rent, can be withdrawn (usually 0.002
                                    sol). This makes it possible not
                                    to carry out these activities, but to act absolutely organically. </p>
                            </div>
                        </details>

                    </div>
                </div>
            </section>
        </div>
        <div class="absolute">
            <p class="text-black font-medium font-mono bg-white leading-relaxed">
                <span>Disclaimer:</span>
                The information provided on this website is for entertainment purposes only. It is not
                intended as legal, financial, professional advice or a tool for earning money. Any actions taken
                based on
                this information are at
                your
                own risk and responsibility.
            </p>
        </div>

    </div>

</template>

<script setup>
import TextAnimation from '@/animations/TextAnimation.vue'
import { ref } from "vue";






</script>

<style></style>