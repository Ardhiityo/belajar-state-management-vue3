<script setup>
import { inject } from "vue";
const numbers = inject("numbers");
</script>

<template>
  <h1>Great Grand Child</h1>
  {{ numbers }}
</template>