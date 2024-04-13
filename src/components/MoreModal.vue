<template>
 <div class="test">
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
});
</script>
