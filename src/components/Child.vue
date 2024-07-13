<script setup>
import { defineProps } from "vue";
import GrandChild from "./GrandChild.vue";
const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <h1>Child</h1>
  <GrandChild :numbers="numbers" />
</template>