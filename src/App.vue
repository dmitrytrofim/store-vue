<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[90px]">
   <v-container>
    <div v-if="store.products.length > 0" class="grid grid-cols-4 gap-[20px]">
     <card-product
      v-for="product in store.products"
      :key="product.id"
      :product="product"
     />
    </div>
    <div v-else class="text-[20px] text-center">Loading...</div>
   </v-container>
  </main>
  <the-footer />
  <more-modal :show="popup.show" :product="popup.data" />
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
 data() {
  return {
   popup: {
    show: false,
    data: null,
   },
  };
 },
 mounted() {
  this.store.loadProducts;
 },
});
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
