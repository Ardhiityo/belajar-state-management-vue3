<script setup>
import { defineProps } from "vue";
const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <h1>Great Grand Child</h1>
  {{ numbers }}
</template>