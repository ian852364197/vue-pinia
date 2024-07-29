import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref(null);
  const isSignIn = computed(() => (userInfo.value ? true : false));
  const getUserName = computed(() => (isSignIn.value ? userInfo.value.userName : null));
  function login(data) {
    userInfo.value = data;
  }

  return { userInfo, isSignIn, getUserName, login };
});
