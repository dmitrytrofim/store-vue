<template>
 <div class="">
  <div class="">
   <p class="">Cart</p>
   <ul class="">
    <li class="" v-for="product in store.cart.products" :key="product.id">
     {{ product.title }}
    </li>
   </ul>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
 name: 'the-cart',
 data() {
  return {
   store: useStore(),
  };
 },
});
</script>
