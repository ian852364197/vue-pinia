import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null);
    const isSignIn = computed(() => (userInfo.value ? true : false));
    const getUserName = computed(() =>
      isSignIn.value && userInfo.value.userName ? userInfo.value.userName : null
    );
    function login(data) {
      userInfo.value = data;
    }
    function logout() {
      userInfo.value = null;
    }

    return { userInfo, isSignIn, getUserName, login, logout };
  },
  {
    persist: true
  }
);
