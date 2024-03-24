<template>
  <div class="app">
    <div class="content">
      <HomeComponent />
      <PageNotFound v-if="false" />
    </div>
    <footer>
      <FooterBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
// import NavBar from './NavBar.vue';
import FooterBar from "./components/FooterBar.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

footer {
  margin-top: auto;
}
</style>
