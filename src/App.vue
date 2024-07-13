<template>
  <main
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <input type="number" placeholder="red" v-model="color.red" />
    <input type="number" placeholder="green" v-model="color.green" />
    <input type="number" placeholder="blue" v-model="color.blue" />
  </main>
</template>

<script setup>
import { ref, reactive, readonly } from "vue";

// const red = ref(0);
// const green = ref(0);
// const blue = ref(0);

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// });

const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});
</script>

<style scoped>
main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
</style>