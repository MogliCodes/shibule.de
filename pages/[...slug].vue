<template>
  <div>
    <main v-if="pageData && sections">
      <WrapperDynamicContentfulElements :sections="sections" />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.path;
const slugFormatted = slug.substring(1) || "home";
const config = useRuntimeConfig();

const { data: pageData } = await useAsyncGql({
  operation: "pageGenericBySlug",
  variables: { slug: slugFormatted, preview: config.public.contentful.preview },
});

const sections =
  pageData?.value?.pageGenericCollection?.items[0]?.sectionsCollection?.items;
</script>
