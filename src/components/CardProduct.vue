<template>
 <div
  @click="store.showModal(product)"
  class="flex flex-col items-center gap-[10px] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[10px] p-[10px] shadow-[0px_0px_24px_-2px_rgba(13,13,13,0.2)] cursor-pointer"
 >
  <p class="self-start max-w-full font-700 truncate">
   {{ product?.title }}
  </p>
  <img
   class="w-[100px] h-[100px] object-contain object-center"
   :src="product?.image"
   alt=""
   loading="lazy"
  />
  <div class="w-full grow">
   <p
    class="relative max-h-[50px] overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:shadow-[0px_-40px_24px_-20px_#fff_inset] after:z-20 pointer-events-none"
   >
    <span class="relative z-10">{{ product?.description }}</span>
   </p>
  </div>
  <div class="relative self-stretch flex justify-between">
   <span class="relative flex items-center">
    <img
     class="absolute top-0 right-[-15px] w-[12px] h-[12px]"
     src="/src/assets/img/svg/star.svg"
     alt=""
    />
    <span class="text-[20px]"> {{ product?.rating.rate }} </span>
   </span>
   <span class="text-[20px] font-600">{{ product?.price }}$</span>
  </div>
  <div class="flex justify-center items-center gap-[10px]">
   <v-button
    @click.stop="store.addToCart(product)"
    class="text-[white]"
    :class="store.cart.products.includes(product!) ? 'bg-[green]' : 'bg-[black]'"
    >{{
     store.cart.products.includes(product!) ? 'Added' : 'Add to cart'
    }}</v-button
   >
  </div>
 </div>
</template>

<script lang="ts">
import { Product } from '@/model';
import { PropType, defineComponent } from 'vue';
import { useStore } from '@/store/store';

export default defineComponent({
 name: 'card-product',
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
 data() {
  return {};
 },
 props: {
  product: Object as PropType<Product>,
 },
});
</script>
