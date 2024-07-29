import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useUserStore } from './user';

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

    return { count, doubleCount, increment };
  },
  {
    //登入時counter也能持久化
    persist: useUserStore().isSignIn
  }
);
