<template>
  <h1>Home</h1>
  <p>count now is {{ count }}</p>
  <p>doubleCount now is {{ doubleCount }}</p>
  <template v-if="isSignIn">
    <p>Hello {{ getUserName }}</p>
    <button type="button" class="btn btn-primary" @click="logout">Logout</button>
  </template>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';

const { count, doubleCount } = storeToRefs(useCounterStore());
const { logout } = useUserStore();
const { isSignIn, getUserName } = storeToRefs(useUserStore());
</script>

<style scoped></style>
