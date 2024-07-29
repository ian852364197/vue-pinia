<template>
  <h1>Home</h1>
  <p>count now is {{ count }}</p>
  <p>doubleCount now is {{ doubleCount }}</p>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const { count, doubleCount } = storeToRefs(useCounterStore());
</script>

<style scoped></style>
