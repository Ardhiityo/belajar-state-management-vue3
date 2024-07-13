<template>
  <div>
    <Parent />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Parent from "./components/Parent.vue";
const numbers = ref([1, 2, 3, 4, 5]);
provide("numbers", numbers);
</script>

<style scoped>
</style>