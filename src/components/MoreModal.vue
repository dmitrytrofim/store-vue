<template>
 <transition name="more">
  <div
   @click="store.closeModal"
   v-if="store.moreModal.show"
   class="fixed top-0 left-0 w-full h-dvh flex bg-[rgba(0,0,0,0.5)] z-[2000] overflow-auto p-[10px]"
  >
   <div
    @click.stop
    class="relative w-full max-w-[500px] flex flex-col m-auto bg-[#fff] p-[30px_10px_20px] rounded-[20px]"
   >
    <p class="text-[26px] font-700 text-center mb-[10px]">
     {{ store.moreModal.data?.title }}
    </p>
    <img
     class="self-center w-[150px] h-[150px] object-contain object-center mb-[20px]"
     :src="store.moreModal.data?.image"
     alt=""
     loading="lazy"
    />
    <p class="text-[18px] mb-[20px]">{{ store.moreModal.data?.description }}</p>
    <div class="flex justify-center mb-[10px]">
     <v-button
      @click="store.addToCart(product)"
      class="text-[white] text-[20px] p-[10px_20px]"
      :class="store.cart.products.includes(product!) ? 'bg-[green]' : 'bg-[black]'"
      >{{
       store.cart.products.includes(product!) ? 'Added' : 'Add to cart'
      }}</v-button
     >
    </div>
    <div class="flex items-center justify-between">
     <span class="flex items-center gap-[5px]">
      <span class="text-[30px]">{{ store.moreModal.data?.rating.rate }}</span>
      <img
       class="relative top-[-2px] w-[30px] aspect-square"
       src="/src/assets/img/svg/star.svg "
       alt=""
      />
     </span>
     <span class="text-[30px] font-600"
      >{{ store.moreModal.data?.price }}$</span
     >
    </div>
    <button
     @click="store.closeModal"
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
import { PropType, defineComponent } from 'vue';
import { Product } from '@/model';
import { useStore } from '@/store';

export default defineComponent({
 name: 'more-modal',
 data() {
  return {
   store: useStore(),
  };
 },
 props: {
  show: Boolean,
  product: Object as PropType<Product>,
 },
});
</script>

<style scoped>
.more-enter-active,
.more-leave-active {
 transition: opacity 0.1s ease;
}

.more-enter-from,
.more-leave-to {
 opacity: 0;
}
</style>
