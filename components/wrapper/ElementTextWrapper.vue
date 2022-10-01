<template>
  <div v-if="props.text">
    <BaseRichTextRenderer :document="props?.text" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: { json: Record<string, unknown> };
}

const props = defineProps<Props>();
</script>

<style>
ul li {
  list-style-type: disc;
}
ul li li {
  list-style-type: circle;
  margin-left: 20px;
}
</style>
