<template>
  <div>
    <div class="bg-orange-300 text-blue-800 p-4 font-semibold text-center">
      <p>We are on the development network. You can see and check how it will be.</p>
    </div>
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