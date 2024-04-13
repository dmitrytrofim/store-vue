<template>
 <div v-if="modalOpen" class="fixed top-0 left-0 border z-[2000]">
  {{ product?.title }}
 </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Product } from '@/model';

export default defineComponent({
 name: 'more-modal',
 props: {
  product: Object as PropType<Product>,
 },
 data() {
  return {
   modalOpen: false,
  };
 },
 methods: {
  showModal() {
   this.modalOpen = true;
  },
 },
});
</script>
