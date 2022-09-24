<template>
  <main v-if="pageData">
    <WrapperDynamicContentfulElements :sections="sections" />
  </main>
  <BaseOverlay />
</template>

<script setup lang="ts">
const { data: pageData } = await useAsyncGql({
  operation: "pageGenericById",
  variables: { id: "4TuN4sAi9fJX2iJ7Lj6qIJ" },
});
const sections = pageData?.value?.pageGeneric?.sectionsCollection.items;
</script>
