<template>
 <button class="rounded-[5px] p-[3px_6px]" type="button">
  <slot></slot>
 </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'v-button',
});
</script>
