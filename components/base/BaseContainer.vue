<template>
  <div
    class="container-base"
    :class="{
      'container-standard': props.containerWidth === 'standard',
      'container-extended': props.containerWidth === 'extended',
      'container-full': props.containerWidth === 'full',
      'mx-auto': props.isCentered,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  containerWidth?: "standard" | "extended" | "full";
  isCentered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isCentered: true,
  containerWidth: "standard",
});
</script>

<style>
.container-standard {
  max-width: 1200px;
}

.container-extended {
  max-width: 1560px;
}
</style>
