<script setup>
import GrandChild from "./GrandChild.vue";
import { inject } from "vue";
const numbers = inject("numbers");
</script>

<template>
  <h1>Child</h1>
  {{ numbers }}
  <GrandChild />
</template>