import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export const useUserStore = defineStore(
  'user',
  () => {
    // status
    const userInfo = ref(null);
    // getter
    const isSignIn = computed(() => (userInfo.value ? true : false));
    const getUserName = computed(() =>
      isSignIn.value && userInfo.value.userName ? userInfo.value.userName : null
    );
    // function
    const login = (data) => {
      //判斷data是否有登入資料
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
      //等待使用者確認登出
      const result = await Swal.fire({
        title: '您確定要登出嗎?',
        showDenyButton: true,
        confirmButtonText: '登出',
        denyButtonText: '取消',
        allowOutsideClick: false
      });
      //使用者確認登出，將userInfo設為null
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
