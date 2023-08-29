<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template class="app">
  <Header />
  <router-view></router-view>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap");
* {
  font-family: "Montserrat";
  margin: 0 !important  ;
  padding: 0;
  user-select: none;
}

.app {
  width: 100vw;
  min-height:100vh ;
}
</style>
