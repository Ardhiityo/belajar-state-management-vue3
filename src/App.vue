<template>
  <main
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <input type="number" placeholder="red" v-model="color.red" />
    <input type="number" placeholder="green" v-model="color.green" />
    <input type="number" placeholder="blue" v-model="color.blue" />
    <button @click="generate">Generate</button>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";

// const red = ref(0);
// const green = ref(0);
// const blue = ref(0);

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// });

// function generate() {
//   red.value = Math.floor(Math.random() * 255);
//   green.value = Math.floor(Math.random() * 255);
//   blue.value = Math.floor(Math.random() * 255);
// };

const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});

function generate() {
  color.red = Math.floor(Math.random() * 255);
  color.green = Math.floor(Math.random() * 255);
  color.blue = Math.floor(Math.random() * 255);
}

// const test = ref("Hello");
// console.log(test.value);
// test.value = false;
// console.log(test.value);

const test = reactive({
  say: "Hello",
});

console.log(test.say);
test.say = false;
console.log(test.say);
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