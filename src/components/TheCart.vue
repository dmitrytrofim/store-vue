<template>
 <div
  v-if="store.cart.show"
  class="fixed top-0 left-0 w-full h-dvh flex justify-end bg-[rgba(0,0,0,0.5)] z-[2000]"
 >
  <div class="w-[300px] bg-[white] overflow-auto p-[20px_10px]">
   <p class="text-[24px] font-600 text-center">Cart</p>
   <ul class="">
    <li class="" v-for="product in store.cart.products" :key="product.id">
     {{ product.title }}
    </li>
   </ul>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
 name: 'the-cart',
 data() {
  return {
   store: useStore(),
  };
 },
});
</script>
