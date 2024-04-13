<template>
 <transition name="more">
  <div
   @click="store.closeModal"
   v-if="store.moreModal.show"
   class="fixed top-0 left-0 w-full h-dvh flex bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-[2000] overflow-auto p-[10px]"
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
    <div class="flex items-center justify-between">
     <span class="flex items-center gap-[5px]">
      <span class="text-[30px]">{{ store.moreModal.data?.rating.rate }}</span>
      <img
       class="relative top-[-2px] w-[30px] aspect-square"
       src="/src/assets/img/svg/star.svg "
       alt=""
      />
     </span>
     <v-button
      @click="store.addToCart(product)"
      class="bg-[black] text-[white] text-[20px]"
      >{{
       store.cart.products.includes(product!) ? 'Added' : 'Add to cart'
      }}</v-button
     >
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
 setup() {
  const store = useStore();
  return { store };
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
