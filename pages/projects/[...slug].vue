<template>
  <div>
    <main v-if="pageData && sections">
      <WrapperDynamicContentfulElements
        is-on-detail-page
        :sections="sections"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.path;
const slugFormatted = slug.replace(/^(?:[^/]*\/){2}\s*/, "");
const config = useRuntimeConfig();

console.log("slug", slugFormatted);
console.log("preview", config.public.contentful.preview);

const { data: pageData } = await useAsyncGql({
  operation: "contentProjectBySlug",
  variables: { slug: slugFormatted, preview: config.public.contentful.preview },
});

const sections =
  pageData?.value?.contentProjectCollection?.items[0]?.sectionsCollection
    ?.items;
</script>
