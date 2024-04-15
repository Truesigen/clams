<template>
    <div>
        <p class="animated-text">{{ animatedText }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    originalText: {
        type: String,
        required: true
    }
});

const animatedText = ref("");
const emit = defineEmits();

onMounted(() => {
    animateText();
});

function animateText() {
    let index = 0;
    const intervalId = setInterval(() => {
        animatedText.value += props.originalText[index];
        index++;
        if (index === props.originalText.length) {
            clearInterval(intervalId);
            // После окончания анимации текста, отправить событие в родительский компонент
            emit('animation-complete');
        }
    }, 50); // Adjust the interval duration for your desired animation speed
}
</script>

<style>
.animated-text {
    opacity: 0;
    animation: fadeInText 2s forwards;
    /* Adjust the animation duration as needed */
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