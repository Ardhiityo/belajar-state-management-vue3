<script setup>
import GrandChild from "./GrandChild.vue";
// import { inject } from "vue";
// const numbers = inject("numbers");

import { useNumbers } from "@/stores/numbers";

const { number, addNumber } = useNumbers();
</script>

<template>
  <h1>Child</h1>
  {{ number }}
  <button @click="addNumber">Add</button>
  <GrandChild />
</template>