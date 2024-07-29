<template>
  <div class="d-flex justify-content-center">
    <form>
      <h1>{{ titleText }}</h1>
      <div class="mb-3">
        <label for="InputEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="InputEmail" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="InputUserName" class="form-label">User name</label>
        <input type="text" class="form-control" id="InputUserName" v-model="userName" required />
      </div>
      <button type="button" class="btn btn-primary" @click="doLogin">Login</button>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const email = ref('');
const userName = ref('');

const { login } = useUserStore();
const { isSignIn, getUserName } = storeToRefs(useUserStore());

const titleText = computed(() => (isSignIn.value ? `Welcome ${getUserName.value}` : 'Login Page'));

const doLogin = () => {
  let data = {
    email: email.value,
    userName: userName.value
  };
  login(data);
};
</script>

<style scoped></style>
