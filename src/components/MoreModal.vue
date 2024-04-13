<template>
 <div v-if="show" class="fixed top-0 left-0 w-full h-dvh border z-[2000]">
  <div class="">
   <p class=""></p>
   <img class=" " src=" " alt="" loading="lazy" />
   <p class=""></p>
  </div>
 </div>
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
