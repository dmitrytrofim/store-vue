<template>
 <div
  v-if="1"
  class="fixed top-0 bottom-0 w-full h-dvh flex bg-[rgba(0,0,0,0.3)] z-[3000] overflow-y-auto"
 >
  <div
   class="relative w-full max-w-[600px] bg-[white] rounded-[20px] p-[40px_20px_20px] m-[auto]"
  >
   <h2 class="text-[30px] font-600 text-center mb-[20px]">Your order</h2>
   <ul class="flex flex-col gap-[15px] mb-[20px]">
    <li
     class="grid grid-cols-[auto_1fr_auto_auto_60px] items-center gap-[10px]"
     v-for="product in store.cart.products"
    >
     <img
      class="w-[40px] h-[40px] object-contain object-center"
      :src="product.image"
      alt=""
     />
     <p class="text-[14px]">{{ product.title }}</p>
     <div class="">{{ product.buy }} * {{ product.price }}$</div>
     <span class="">=</span>
     <span class="font-600">{{ product.buy! * product.price }}$</span>
    </li>
   </ul>
   <div class="flex justify-between items-center">
    <span class="text-[24px] font-600"
     >Total: {{ store.calcProductCart() }}$</span
    >
    <button
     class="font-600 text-[24px] text-[white] p-[5px_10px] bg-[green] rounded-[5px]"
    >
     To pay
    </button>
   </div>
   <button class="absolute top-[8px] right-[15px] text-[24px]" type="button">
    &#10006;
   </button>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/store';

export default defineComponent({
 name: 'order-modal',
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
});
</script>
