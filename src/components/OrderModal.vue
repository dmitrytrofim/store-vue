<template>
 <transition name="order">
  <div
   v-if="store.orderModal"
   @click="store.closeOrderModal"
   class="fixed top-0 bottom-0 w-full h-dvh flex bg-[rgba(0,0,0,0.3)] z-[3000] overflow-y-auto p-[10px]"
  >
   <div
    @click.stop
    class="relative w-full max-w-[600px] bg-[white] rounded-[20px] p-[40px_20px_20px] m-[auto]"
   >
    <h2 class="text-[30px] font-600 text-center mb-[20px]">Your order</h2>
    <ul class="flex flex-col mb-[20px]">
     <li
      class="grid grid-cols-[auto_1fr_auto] items-center gap-[10px] py-[5px] border-b-[1px] first:border-t-[1px] max-[640px]:grid-cols-1 max-[640px]:justify-items-center max-[640px]:text-center"
      v-for="product in store.cart.products"
     >
      <img
       class="w-[40px] h-[40px] object-contain object-center"
       :src="product.image"
       alt=""
      />
      <p class="text-[14px]">{{ product.title }}</p>
      <div class="">
       {{ product.buy }} * {{ product.price }}$ =
       <span class="font-600"
        >{{ (product.buy! * product.price).toFixed(2) }}$</span
       >
      </div>
     </li>
    </ul>
    <div class="flex justify-between items-center gap-[10px]">
     <span class="text-[24px] font-600"
      >Total: <span class="text-[red]">{{ store.calcProductCart }}$</span></span
     >
     <button
      class="font-600 text-[24px] text-[white] p-[5px_10px] bg-[green] rounded-[5px] whitespace-nowrap"
     >
      To pay
     </button>
    </div>
    <button
     class="absolute top-[8px] right-[15px] text-[24px]"
     @click="store.closeOrderModal"
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
 name: 'order-modal',
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
});
</script>

<style scoped>
.order-enter-active {
 transition: opacity 0.3s ease;
}
.order-leave-active {
 transition: opacity 0.1s ease;
}

.order-enter-from,
.order-leave-to {
 opacity: 0;
}
</style>
