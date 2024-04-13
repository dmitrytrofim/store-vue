<template>
 <div v-if="show" class="fixed top-0 left-0 border z-[2000]">test</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Product } from '@/model';

export default defineComponent({
 name: 'more-modal',
 props: {
  show: Boolean,
  product: Object as PropType<Product>,
 },
});
</script>
