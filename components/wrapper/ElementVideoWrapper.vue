<template>
  <div>
    <div>ElementVideo</div>
    <iframe
      class="w-full aspect-video"
      :src="$attrs.videoSource"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>
