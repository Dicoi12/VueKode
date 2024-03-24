<template>
  <div class="app">
    <NavBar v-if="showNavBar" />
    <main class="content">
      <HomeComponent @onTextViewed="showNavBar=true;console.log('test')" />
      <PageNotFound v-if="false" />
    </main>
    <footer>
      <FooterBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
// import NavBar from './NavBar.vue';
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import { ref } from "vue";
// import HomeComponent from './Pages/HomeComponent.vue';
// import PageNotFound from './Pages/PageNotFound.vue';
const showNavBar = ref(false);
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
