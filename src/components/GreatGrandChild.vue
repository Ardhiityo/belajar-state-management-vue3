<script setup>
// import { inject } from "vue";
// const numbers = inject("numbers");

import { useNumbers } from '@/stores/numbers';

const {number, getNumbers} = useNumbers();

</script>

<template>
  <h1>Great Grand Child</h1>
  {{ number }}
  <br>
  {{getNumbers(12) }}
</template>