<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const { increment } = useCounterStore();
// storeToRefs 維持響應式
const { count, doubleCount } = storeToRefs(useCounterStore());
</script>
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button class="btn btn-outline-secondary" @click="increment">Increment</button>
  </div>
</template>
<style scoped></style>
