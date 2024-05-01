<template>
 <div class="flex flex-col gap-[10px]">
  <SelectButton v-model="selectedCost" :options="cost" optionLabel="name" />
  <SelectButton v-model="selectedRating" :options="rating" optionLabel="name" />
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
   selectedCost: null,
   cost: [
    { name: 'Cost ↑', code: 'up' },
    { name: 'Cost ↓', code: 'down' },
   ],
   selectedRating: null,
   rating: [
    { name: 'Rating ↑', code: 'up' },
    { name: 'Rating ↓', code: 'down' },
   ],
  };
 },
 watch: {
  selectedCost() {
   this.store.sortCost((this.selectedCost as any)?.code);
  },
 },
});
</script>
