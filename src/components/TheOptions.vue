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
   v-model="sliderValue"
   :tooltip="'always'"
   :tooltip-placement="['top', 'bottom']"
  ></vue-slider>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
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
   sliderValue: [20, 80],
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
});
</script>
