<template>
    <div :class="active ? 'spin-animation' : ''" @mouseenter="active = !active">
        <img :src="image" alt="Логотип">
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    image: {
        type: String,
        required: true
    }
})

const active = ref(false)


</script>

<style>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.spin-animation {
    animation: spin 0.5s linear forwards;
}
</style>