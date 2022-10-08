<template>
  <div>
    <div v-for="brand in brands" :key="brand.title.lowercase()">
      {{ brand.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const { data } = await useAsyncGql({
  operation: "queryBrands",
  variables: { preview: config.public.contentful.preview },
});

const brands = data?.value.contentBrandCollection?.items;
</script>
