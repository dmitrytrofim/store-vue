<template>
 <div class="flex flex-col items-center gap-[10px] px-[5px]">
  <SelectButton
   @click="choiceCost"
   v-model="selectedCost"
   :options="cost"
   optionLabel="name"
  />
  <SelectButton
   @click="choiceRating"
   v-model="selectedRating"
   :options="rating"
   optionLabel="name"
  />
  <vue-slider
   v-model="slider"
   :tooltip="'always'"
   :min="getRangeCost.min"
   :max="getRangeCost.max"
   :tooltip-placement="['bottom', 'bottom']"
   class="self-stretch"
  ></vue-slider>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';
import VueSlider from 'vue-3-slider-component';
import { useStore } from '@/store';

export default defineComponent({
 components: { SelectButton, VueSlider },
 name: 'the-options',
 data() {
  return {
   store: useStore(),
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
   slider: [0, 0],
  };
 },
 methods: {
  choiceCost() {
   this.selectedRating = null;
   this.store.sortCost((this.selectedCost as any)?.code);
  },
  choiceRating() {
   this.selectedCost = null;
   this.store.sortRating((this.selectedRating as any)?.code);
  },
  checkRangeCost() {
   const arrayCost = this.store.products.map((prod) => prod.price);
   const min = Math.floor(Math.min(...arrayCost));
   const max = Math.ceil(Math.max(...arrayCost));
   return { min, max };
  },
 },
 computed: {
  getRangeCost() {
   const { min, max } = this.checkRangeCost();
   return {
    min,
    max,
   };
  },
 },
 watch: {
  'store.products'() {
   const { min, max } = this.checkRangeCost();
   this.slider = [min, max];
  },
 },
});
</script>
