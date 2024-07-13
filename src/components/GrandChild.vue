<script setup>
import GreatGrandChild from "./GreatGrandChild.vue";
const { numbers } = defineProps(["numbers"]);
</script>

<template>
  <h1>Grand Child</h1>
  <GreatGrandChild :numbers="numbers" />
</template>