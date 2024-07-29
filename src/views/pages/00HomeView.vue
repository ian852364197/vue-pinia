<template>
  <h1>Home</h1>
  <p>count now is {{ count }}</p>
  <p>doubleCount now is {{ doubleCount }}</p>
  <template v-if="isSignIn">
    <p>Hello {{ userInfo.userName }}</p>
    <p>Your email address: {{ userInfo.email }}</p>
  </template>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';

const { count, doubleCount } = storeToRefs(useCounterStore());
const { userInfo, isSignIn } = storeToRefs(useUserStore());
</script>

<style scoped></style>
