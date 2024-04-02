<template>
    <ul class="flex w-full justify-content-around">
        <li class="cursor-pointer">Home</li>
        <li class="cursor-pointer" @click="router.push('/projects')">Projects</li>
        <li class="cursor-pointer">Skills</li>
    </ul>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router=useRouter();
</script>
<style scoped>
 ul {
 list-style-type: none;
 border-bottom: solid 1px white;
 }
 ul li{
    margin-bottom: 15px;

 }
</style>