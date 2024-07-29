import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null);
    const isSignIn = computed(() => (userInfo.value ? true : false));
    const getUserName = computed(() =>
      isSignIn.value && userInfo.value.userName ? userInfo.value.userName : null
    );
    const login = (data) => {
      if (data.email && data.userName) {
        Swal.fire({
          text: '登入成功!',
          icon: 'success',
          allowOutsideClick: false,
          confirmButtonText: '確認'
        });
        userInfo.value = data;
      } else {
        Swal.fire({
          text: '登入資料有誤!',
          icon: 'error',
          allowOutsideClick: false,
          confirmButtonText: '確認'
        });
      }
    };
    const logout = async () => {
      const result = await Swal.fire({
        title: '您確定要登出嗎?',
        showDenyButton: true,
        confirmButtonText: '登出',
        denyButtonText: '取消',
        allowOutsideClick: false
      });
      if (result.isConfirmed) {
        Swal.fire({
          text: '已登出!',
          icon: 'success',
          allowOutsideClick: false,
          confirmButtonText: '確認'
        });
        userInfo.value = null;
      }
    };

    return { userInfo, isSignIn, getUserName, login, logout };
  },
  {
    persist: true
  }
);
