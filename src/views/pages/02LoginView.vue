<template>
  <div class="d-flex justify-content-center">
    <!-- 沒登入=>登入畫面 -->
    <form v-if="!isSignIn">
      <h1>Login Page</h1>
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
    <!-- 有登入=>顯示user name及登出按鈕 -->
    <div v-else class="text-center">
      <h1>Welcome {{ getUserName }}</h1>
      <button type="button" class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();

//登入資料
const email = ref('');
const userName = ref('');

const { login, logout } = useUserStore();
const { isSignIn, getUserName } = storeToRefs(useUserStore());

const doLogin = () => {
  //登入後轉跳至home
  let data = {
    email: email.value,
    userName: userName.value
  };
  login(data);
  router.push({ name: 'home' });
};
</script>

<style scoped></style>
