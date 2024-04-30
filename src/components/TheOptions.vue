<template>
 <div>
  <SelectButton v-model="selectedCost" :options="cost" optionLabel="name" />
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectButton from 'primevue/selectbutton';

export default defineComponent({
 components: { SelectButton },
 name: 'the-options',
 data() {
  return {
   selectedCost: null,
   cost: [
    { name: 'Cost ↑', code: 'up' },
    { name: 'Cost ↓', code: 'down' },
   ],
  };
 },
});
</script>
