<template>
  <h4>ElementTextWrapper</h4>
  <BaseRichTextRenderer :document="props.text" />
</template>

<script setup lang="ts">

interface Props {
  text?: { json: Record<string, unknown> }
}

const props = defineProps<Props>()

</script>
