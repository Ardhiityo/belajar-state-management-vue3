<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const numbers = ref([1, 2, 3, 4, 5]);
</script>
<template>
  <h1>Parent</h1>
  <Child :numbers="numbers" />
</template>