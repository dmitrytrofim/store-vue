<template>
 <header
  class="fixed w-full bg-[rgba(255,255,255,0.7)] backdrop-blur-sm z-[1000]"
 >
  <v-container>
   <div class="flex justify-between py-[10px]">
    <h1 class="text-center text-[30px] font-700">Store-vue</h1>
    <button
     @click="store.showCart"
     class="w-[30px] h-[30px] bg-[url('/src/assets/img/svg/bag.svg')] bg-no-repeat bg-cover bg-center pt-[7px]"
     type="button"
    >
     {{ store.cart.products.length }}
    </button>
   </div>
  </v-container>
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/store';

export default defineComponent({
 name: 'the-header',
 data() {
  return {
   store: useStore(),
  };
 },
});
</script>
