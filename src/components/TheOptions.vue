<template>
 <form
  action="#"
  method="post"
  class="flex flex-col items-center gap-[10px] px-[5px]"
 >
  <h2 class="text-[20px] font-600">Filters</h2>
  <SelectButton
   @click="choiceCost"
   v-model="selectedCost"
   :options="cost"
   :allowEmpty="false"
   optionLabel="name"
  />
  <SelectButton
   @click="choiceRating"
   v-model="selectedRating"
   :options="rating"
   :allowEmpty="false"
   optionLabel="name"
  />
  <vue-slider
   v-if="!store.search"
   @dragEnd="filterCost"
   v-model="slider"
   :tooltip="'always'"
   :min="store.rangeCost.min"
   :max="store.rangeCost.max"
   :tooltip-placement="['bottom', 'bottom']"
   class="self-stretch mb-[30px]"
  ></vue-slider>
  <v-button
   @click.prevent="resetFilters()"
   class="text-[18px] text-[white] bg-[#761616] !p-[10px_20px]"
   >Reset</v-button
  >
 </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';
import VueSlider from 'vue-3-slider-component';
import { useStore } from '@/store/store';

export default defineComponent({
 components: { SelectButton, VueSlider },
 name: 'the-options',
 setup() {
  const store = useStore();
  return {
   store,
  };
 },
 data() {
  return {
   selectedCost: null as any,
   cost: [
    { name: 'Cost ↑', code: 'up' },
    { name: 'Cost ↓', code: 'down' },
   ],
   selectedRating: null as any,
   rating: [
    { name: 'Rating ↑', code: 'up' },
    { name: 'Rating ↓', code: 'down' },
   ],
   slider: [] as any,
  };
 },
 methods: {
  choiceCost() {
   this.store.sortCost((this.selectedCost as any)?.code);
   this.selectedRating = null;
  },
  choiceRating() {
   this.store.sortRating((this.selectedRating as any)?.code);
   this.selectedCost = null;
  },
  filterCost() {
   this.store.filterProductsCost(this.slider);
   this.store.setSliderCost(this.slider);
  },
  resetFilters() {
   this.slider = [this.store.rangeCost.min, this.store.rangeCost.max];
   this.selectedRating = null;
   this.selectedCost = null;
   this.store.resetProducts();
   this.store.setSliderCost(this.slider);
   this.store.setSearch(false);
   this.store.setCurrentPage(1);
  },
 },
 watch: {
  'store.rangeCost': {
   handler() {
    this.$nextTick(() => {
     this.slider = [this.store.rangeCost.min, this.store.rangeCost.max];
    });
   },
   deep: true,
  },
  'store.products'() {
   if (this.selectedCost) {
    this.store.sortCost((this.selectedCost as any)?.code);
   }
   if (this.selectedRating) {
    this.store.sortRating((this.selectedRating as any)?.code);
   }
  },
 },
});
</script>
