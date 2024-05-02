<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[85px]">
   <v-container>
    <div class="grid grid-cols-[240px_1fr] gap-[20px]">
     <the-options />
     <div v-if="store.products.length > 0" class="grid grid-cols-3 gap-[20px]">
      <card-product
       v-for="product in store.products.slice(0, 6)"
       :key="product.id"
       :product="product"
      />
     </div>
     <div
      v-else-if="store.data.length === 0"
      class="text-[20px] text-center text-[blue]"
     >
      Loading...
     </div>
     <div
      v-else-if="store.products.length === 0"
      class="text-[20px] text-center text-[red]"
     >
      There are no products that meet the requirements...
     </div>
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
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
 data() {
  return {};
 },
 mounted() {
  this.store.loadProducts();
 },
});
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
