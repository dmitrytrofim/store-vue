<template>
 <div class="flex flex-col items-center gap-[10px]">
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
   v-model="slider.value"
   :tooltip="'always'"
   :min="slider.min"
   :max="slider.max"
   :tooltip-placement="['bottom', 'bottom']"
   class="self-stretch"
  ></vue-slider>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';
// @ts-ignore
import VueSlider from 'vue-slider-component';
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
   slider: {
    min: 0,
    max: 200,
    value: [20, 120],
   },
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
 },
 computed: {
  getRangeCost() {
   const arrayCost = this.store.products.map((prod) => prod.price);
   const min = Math.min(...arrayCost);
   const max = Math.max(...arrayCost);
   this.slider.min = min;
   this.slider.max = max;
   this.slider.value = [min, max];
  },
 },
});
</script>
