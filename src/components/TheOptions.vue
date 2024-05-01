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
   @dragEnd="filterCost"
   v-model="slider"
   :tooltip="'always'"
   :min="store.rangeCost.min"
   :max="store.rangeCost.max"
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
  },
 },
 watch: {
  'store.rangeCost': {
   handler() {
    this.$nextTick(() => {
     this.slider = [this.store.rangeCost.min, this.store.rangeCost.max];
     if (this.selectedCost) console.log(1);
     if (this.selectedCost)
      this.store.sortCost((this.selectedCost as any)?.code);
     if (this.selectedRating)
      this.store.sortCost((this.selectedRating as any)?.code);
    });
   },
   deep: true,
  },
 },
});
</script>
