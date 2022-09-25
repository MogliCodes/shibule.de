<template>
  <div v-if="$attrs?.image?.url">
    <img :src="$attrs.image.url" alt="" />
  </div>
</template>
