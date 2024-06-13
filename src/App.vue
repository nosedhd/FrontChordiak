<script setup>
</script>

<template>
  <div class="container-app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.container-app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
}

.navbar router-link {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

.content {
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}
</style>