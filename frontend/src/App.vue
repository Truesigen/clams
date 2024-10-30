<template>
  <div>
    <Navigation></Navigation>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import Navigation from '@/pages/Navigation.vue'
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
</style>