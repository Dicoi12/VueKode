<template>
  <div>
    <div>
    <div class="cont" v-if="isFirstTime=='true'">
      <div class="flex flex-column" >
        <h1>{{ text }}</h1>
      </div>
    </div>
    <div v-if="isFirstTime='false'" class="fadein animation-duration-2000 ">
      <Presentation />
      <div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { ref,defineEmits, watch } from "vue";
// import { useHelperStore } from "../stores/helperStore";

// const helperStore=useHelperStore();
onBeforeMount(()=>{
  localStorage.setItem('isFirstTime','true');
})
const textFull = ref("Welcome to my website!");
const interval = 100;
const text = ref("");
let index = 0;
const isFirstTime = ref(localStorage.getItem('isFirstTime')||'');
const emit=defineEmits(['onTextViewed']);
function afiseazaText() {
  if (index < textFull.value.length) {
    text.value += textFull.value[index];
    index++;
  } else {
    clearInterval(intervalID);
    isFirstTime.value = 'false';
  }
}
watch(
  () => isFirstTime,
  () => {
    if(isFirstTime.value=='false')
    emit('onTextViewed')
  }
)

var intervalID = setInterval(afiseazaText, interval);

</script>

<style scoped>
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.text {
  font-family: "Helvetica", sans-serif;
  font-size: 36px;
  text-align: center;
}
</style>
