<template>
 <the-wrapper>
  <the-header />
  <main class="pt-[85px]">
   <v-container>
    <div class="grid grid-cols-[240px_1fr] gap-[20px]">
     <IconField class="col-[2/3] m-[0_auto_10px]" iconPosition="left">
      <InputIcon class="pi pi-search"></InputIcon>
      <InputText v-model="search" placeholder="Search" />
     </IconField>
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
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

export default defineComponent({
 components: { IconField, InputIcon, InputText },
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
