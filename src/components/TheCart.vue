<template>
 <transition name="cart">
  <div
   @click="store.closeCart"
   v-if="store.cart.show"
   class="fixed top-0 left-0 w-full h-dvh flex justify-end bg-[rgba(0,0,0,0.5)] z-[2000]"
  >
   <div
    @click.stop
    class="relative w-[300px] flex flex-col bg-[white] overflow-auto p-[40px_10px_20px]"
   >
    <p class="text-[24px] font-600 text-center mb-[10px]">Cart</p>
    <ul class="grow flex flex-col gap-[10px] mb-[20px]">
     <li
      class="flex flex-col gap-[10px] border-b-[1px] pb-[10px] mb-[5px]"
      v-for="product in store.cart.products"
      :key="product.id"
     >
      <div class="flex items-center gap-[10px]">
       <img
        class="shrink-0 w-[50px] aspect-square object-contain object-center"
        :src="product.image"
        alt=""
       />
       <p class="grow">{{ product.title }}</p>
       <button @click="store.removeProduct(product)" class="mr-[5px]">
        &#10006;
       </button>
      </div>
      <div class="flex justify-center items-center gap-[5px]">
       <button
        @click="store.minusProduct(product)"
        class="w-[20px] h-[20px] bg-[black] rounded-full text-[white]"
        type="button"
       >
        &#8722;
       </button>
       <span class="text-[20px]">{{ product.buy }}</span>
       <button
        @click="store.addProduct(product)"
        class="w-[20px] h-[20px] bg-[black] rounded-full text-[white]"
        type="button"
       >
        &#43;
       </button>
      </div>
     </li>
    </ul>
    <div class="flex justify-center">
     <span class="text-[26px] font-600 mb-[20px]"
      >Total:
      <span class="text-[red] font-700"
       >{{ store.calcProductCart() }}$</span
      ></span
     >
    </div>
    <div class="flex justify-evenly items-center">
     <button
      v-if="store.cart.products.length > 0"
      class="font-600 text-[20px] text-[white] p-[5px_10px] bg-[green] rounded-[5px]"
     >
      To Pay
     </button>
     <button
      @click="store.removeAll"
      v-if="store.cart.products.length > 0"
      class="font-600 text-[20px] text-[white] p-[5px_10px] bg-[black] rounded-[5px]"
     >
      Remove ALL
     </button>
    </div>
    <button
     @click="store.closeCart"
     class="absolute top-[8px] right-[15px] text-[24px]"
     type="button"
    >
     &#10006;
    </button>
   </div>
  </div>
 </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/store';

export default defineComponent({
 name: 'the-cart',
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
 data() {
  return {};
 },
});
</script>

<style scoped>
.cart-enter-active {
 transition: opacity 0.3s ease;
}
.cart-leave-active {
 transition: opacity 0.1s ease;
}

.cart-enter-from,
.cart-leave-to {
 opacity: 0;
}
</style>
