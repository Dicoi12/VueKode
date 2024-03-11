<template>
  <NavBar />
  <main>
   <HomeComponent />
    <PageNotFound v-if="false" />
  </main>
  <FooterBar />
  <main class="fixed vignette pointer-events-none" />
</template>
<script setup lang="ts">
import FooterBar from './Pages/FooterBar.vue';
import HomeComponent from './components/HomeComponent.vue';

</script>

<style scoped>
</style>