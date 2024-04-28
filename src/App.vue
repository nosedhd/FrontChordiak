<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <div class="container-app">
    <HomeView />
    <!-- <RouterLink to="/">Home</RouterLink>
  <RouterView /> -->
  </div>
</template>

<style scoped>
.container-app {
  width: 80vw;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
