<template>
    <div>
        <p class="animated-text">{{ animatedText }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const animatedText = ref("");
const emit = defineEmits(['animation-complete']);

onMounted(() => {
    animateText();
});

function animateText() {

    const originalText = "meme incinerator";

    let index = 0;

    const intervalId = setInterval(() => {
        animatedText.value += originalText.charAt(index);
        index++;
        if (index === originalText.length) {
            clearInterval(intervalId);

            emit('animation-complete');
        }
    }, 100);
}
</script>
<style>
.animated-text {
    opacity: 0;
    animation: fadeInText 2s forwards;

}

@keyframes fadeInText {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>