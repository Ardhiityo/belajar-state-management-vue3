<script setup>
// import { inject } from "vue";
// const numbers = inject("numbers");

import { useNumbers } from '@/stores/numbers';

const {number} = useNumbers();

</script>

<template>
  <h1>Great Grand Child</h1>
  {{ number }}
</template>