<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[90px]">
   <v-container>
    <div v-if="store.products.length > 0" class="grid grid-cols-4 gap-[20px]">
     <div
      class="flex flex-col items-center gap-[10px] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[10px] p-[10px] shadow-[0px_0px_24px_-2px_rgba(13,13,13,0.2)]"
      v-for="product in store.products"
      :key="product.id"
     >
      <p class="self-start max-w-full font-700 truncate">
       {{ product.title }}
      </p>
      <img
       class="w-[100px] h-[100px] object-contain object-center"
       :src="product.image"
       alt=""
       loading="lazy"
      />
      <div class="w-full grow mb-[10px]">
       <p
        class="relative max-h-[50px] overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:shadow-[0px_-30px_24px_-20px_#fff_inset] after:z-20 pointer-events-none"
       >
        <span class="relative z-10">{{ product.description }}</span>
       </p>
      </div>
      <div class="relative self-stretch flex justify-between">
       <span class="relative flex items-center">
        <img
         class="absolute top-0 right-[-15px] w-[12px] h-[12px]"
         src="/src/assets/img/svg/star.svg"
         alt=""
        />
        <span class="text-[20px]">
         {{ product.rating.rate }}
        </span>
       </span>
       <span class="text-[20px] font-600">{{ product.price }}$</span>
      </div>
      <div class="flex justify-center items-center gap-[10px]">
       <v-button class="bg-[blue] text-[white]">More</v-button>
       <v-button @click="addToCart(product)" class="bg-[black] text-[white]">{{
        store.cart.includes(product) ? 'Added' : 'Add'
       }}</v-button>
      </div>
     </div>
    </div>
    <div v-else class="text-[20px] text-center">Loading...</div>
   </v-container>
  </main>
  <the-footer />
  <more-modal />
 </the-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMagaz } from './store';

export default defineComponent({
 setup() {
  const store = useMagaz();
  return { store };
 },
 mounted() {
  this.store.loadProducts;
 },
 methods: {
  addToCart(data) {
   this.store.addToCart(data);
  },
 },
});
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
