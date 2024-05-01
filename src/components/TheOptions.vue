<template>
 <div class="flex flex-col gap-[10px]">
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
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';
import { useStore } from '@/store';

export default defineComponent({
 components: { SelectButton },
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
