<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[85px]">
   <v-container>
    <div class="grid grid-cols-[240px_1fr] gap-[20px]">
     <the-options />
     <div v-if="store.products.length > 0" class="grid grid-cols-3 gap-[20px]">
      <card-product
       v-for="product in store.products"
       :key="product.id"
       :product="product"
      />
     </div>
     <div v-else class="text-[20px] text-center">Loading...</div>
    </div>
   </v-container>
  </main>
  <the-footer />
  <more-modal :show="store.moreModal.show" :product="store.moreModal.data" />
  <the-cart />
 </the-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './store';

export default defineComponent({
 data() {
  return {
   store: useStore(),
  };
 },
 mounted() {
  this.store.loadProducts;
  console.log(this.store.rangeCost);
 },
 computed: {
  setRangeCost() {
   this.store.setRangeCost;
  },
 },
});
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
