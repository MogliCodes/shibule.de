<template>
  <div>
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">

interface Props {
  text: string
  entryId?: string
  to?: string
}
const props = defineProps<Props>()
</script>
