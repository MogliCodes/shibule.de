<template>
  <div class="grid gap-8" :class="`grid-cols-${props.columns}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  columns: number;
}

const props = defineProps<Props>();
</script>
