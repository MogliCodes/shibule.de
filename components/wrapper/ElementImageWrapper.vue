<template>
  <div v-if="$attrs?.image?.url">
    <img
      :class="{
        'shadow-xl rounded-lg': props.shadow,
      }"
      :src="$attrs.image.url"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
interface IImageProps {
  shadow: boolean;
}

const props = defineProps<IImageProps>();
</script>
