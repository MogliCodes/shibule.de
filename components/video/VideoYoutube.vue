<template>
  <div>
    <iframe class="w-full aspect-video" :src="props.videoSource"></iframe>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  videoSource: string;
}

const props = defineProps<Props>();
</script>
