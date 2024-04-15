<template>
    <h1 class="text-3xl font-bold text-center text-gray-800">{{ tokenData.length + ' hostiles' }}</h1>
    <div class="flex-col px-12 overflow-x-clip py-12">

        <transition-group name="list" tag="div">
            <Token v-for="(token, index) in tokenData" :key="token.address" :token="token"
                @destroyToken="emit('destroyToken', token, index)" />
        </transition-group>


    </div>


</template>
<script setup>
import { ref, onMounted } from 'vue'
import Token from '@/components/Token.vue'


const emit = defineEmits(['destroyToken'])

const props = defineProps({
    tokenData: {
        type: Array,
        required: true
    }
})


const destroyToken = (token, index) => {

    emit('destroyToken', token, index)
}



</script>
<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>