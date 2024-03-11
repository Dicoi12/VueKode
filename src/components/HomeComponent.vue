<template>
  <main :style="`background-color:${backgroundcolor}`"> <div class="cont"></div></main>
</template>
<script setup lang="ts">
import { ref } from "vue";

const backgroundcolor = ref('#714520');

</script>
<style scoped>
.cont{
    width: 100vh;
    height: 100vh;
}
</style>
