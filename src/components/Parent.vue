<script setup>
import Child from "./Child.vue";
import { ref } from "vue";
import useNumbers from "@/composable/useNumbers";

const { numbers, addNumber } = useNumbers();
</script>
<template>
  <h1>Parent</h1>
  {{ numbers }}
  <button @click="addNumber">Add</button>
  <Child />
</template>