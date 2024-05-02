<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[85px]">
   <v-container>
    <div class="grid grid-cols-[240px_1fr] gap-[20px]">
     <div class="col-[2/3] m-[0_auto_10px]">
      <InputGroup class="">
       <Button
        @click="searchProducts"
        icon="pi pi-search"
        severity="contrast"
       />
       <InputText
        @keyup.enter="searchProducts"
        v-model="search"
        placeholder="Search"
       />
       <Button @click="search = ''" icon="pi pi-times" severity="contrast" />
      </InputGroup>
     </div>
     <the-options />
     <div v-if="store.products.length > 0" class="grid grid-cols-3 gap-[20px]">
      <card-product
       v-for="product in store.products.slice(
        store.getPage,
        store.getPageProducts
       )"
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
     <div class="flex items-center justify-center gap-[10px] col-[2/3]">
      <button
       @click="store.setCurrentPage(page)"
       class="w-[30px] text-[20px] border"
       :class="store.pages.current === page ? 'bg-[black] text-[white]' : ''"
       v-for="page in store.getPagesProducts"
      >
       {{ page }}
      </button>
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
import { useStore } from './store/store';
import InputGroup from 'primevue/inputgroup';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default defineComponent({
 components: { InputGroup, InputIcon, InputText, Button },
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
 data() {
  return {
   search: '',
  };
 },
 methods: {
  searchProducts() {
   this.store.searchProducts(this.search);
   this.store.setSearch(true);
   this.store.setCurrentPage(1);
  },
 },
 mounted() {
  this.store.loadProducts();
 },
 watch: {
  'store.sliderCost': {
   handler() {
    this.search = '';
   },
   deep: true,
  },
 },
});
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
