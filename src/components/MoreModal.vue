<template>
 <v-button class="bg-[blue] text-[white]">More</v-button>

 <teleport to="body">
  <div class="test">{{ product?.title }}</div>
 </teleport>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Product } from '@/model';

export default defineComponent({
 name: 'more-modal',
 props: {
  product: Object as PropType<Product>,
 },
});
</script>
