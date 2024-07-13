<script setup>
import { ref } from "vue";
import GreatGrandChild from "./GreatGrandChild.vue";
import useNumbers from "@/composable/useNumbers";

const {numbers} = useNumbers();
</script>

<template>
  <h1>Grand Child</h1>
  {{ numbers }}
  <GreatGrandChild />
</template>