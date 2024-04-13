<template>
 <div
  v-if="store.moreModal.show"
  class="fixed top-0 left-0 w-full h-dvh flex bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-[2000]"
 >
  <div
   class="relative w-full max-w-[500px] flex flex-col m-auto bg-[#fff] p-[30px_10px_20px] rounded-[20px]"
  >
   <p class="text-[20px] font-700 text-center mb-[10px]">
    {{ product?.title }}
   </p>
   <img
    class="self-center w-[150px] h-[150px] object-contain object-center mb-[20px]"
    :src="product?.image"
    alt=""
    loading="lazy"
   />
   <p class="text-[18px] mb-[20px]">{{ product?.description }}</p>
   <div class="flex items-center justify-between">
    <span class="flex items-center gap-[5px]">
     <span class="text-[30px]">{{ product?.rating.rate }}</span>
     <img
      class="relative top-[-2px] w-[30px] aspect-square"
      src="/src/assets/img/svg/star.svg "
      alt=""
     />
    </span>
    <span class="text-[30px] font-600">{{ product?.price }}$</span>
   </div>
   <button class="absolute top-[8px] right-[15px]" type="button">
    &#10006;
   </button>
  </div>
 </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Product } from '@/model';
import { useMagaz } from '@/store';

export default defineComponent({
 name: 'more-modal',
 setup() {
  const store = useMagaz();
  return { store };
 },
 props: {
  show: Boolean,
  product: Object as PropType<Product>,
 },
});
</script>
