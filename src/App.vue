<template>
  <main :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }">
    <input type="number" placeholder="red" v-model="red" />
    <input type="number" placeholder="green" v-model="green" />
    <input type="number" placeholder="blue" v-model="blue" />
  </main>
</template>

<script setup>
import { ref } from "vue";
const red = ref(0);
const green = ref(0);
const blue = ref(0);
</script>

<style scoped>
main {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0%;
  padding: 0%;
}
</style>