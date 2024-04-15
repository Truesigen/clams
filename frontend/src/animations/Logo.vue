<template>
    <div class="logo" :class="active ? 'spin-animation' : ''" @mouseover="animate">
        <img :src="image" alt="Логотип">
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: false
        }
    },
    props: {
        image: String
    },
    methods: {
        animate() {
            this.active = !this.active
        }
    }
};
</script>

<style>
.logo {
    width: 100px;
    height: 100px;
    cursor: pointer;
}

.logo img {
    width: 100%;
    height: 100%;
}

/* CSS анимация */
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