<template>
  <div>
    <component :is="resolveVideoTypeComponent(props.videoSource)" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoSource?: string;
}

const props = defineProps<Props>();

function resolveVideoTypeComponent(videoSource) {
  if (videoSource.includes("youtube")) {
    return resolveComponent("VideoYoutube");
  }
}
</script>
