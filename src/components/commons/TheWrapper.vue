<template>
 <div
  class="relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[auto_1fr_auto] overflow-hidden"
 >
  <slot></slot>
 </div>
</template>

<script lang="ts">
export default {
 name: 'the-wrapper',
};
</script>

