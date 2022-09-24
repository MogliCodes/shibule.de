<template>
  <NuxtLink to="/">
    <img
      v-if="props.isWhite"
      class="w-20 mx-auto"
      src="~/public/img/shibule_logo_white.svg"
    />
    <img
      v-if="props.isBlack"
      class="w-20 mx-auto"
      src="~/public/img/shibule_logo.svg"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  isWhite?: boolean;
  isBlack?: boolean;
}

const props = defineProps<Props>();
</script>
