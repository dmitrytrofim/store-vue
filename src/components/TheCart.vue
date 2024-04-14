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
     <li class="" v-for="product in store.cart.products" :key="product.id">
      <div class="flex items-center gap-[10px]">
       <img
        class="shrink-0 w-[50px] aspect-square object-contain object-center"
        :src="product.image"
        alt=""
       />
       <p class="">{{ product.title }}</p>
      </div>
     </li>
    </ul>
    <span>Total:</span>
    <button
     @click="store.closeCart"
     class="absolute top-[8px] right-[15px]"
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
