<template>
  <BaseContainer class="min-h-screen flex items-center">
    <div class="w-full">
      <h1>Projects</h1>
      <BaseGrid columns="2">
        <div v-for="project in projects" :key="project.slug">
          <NuxtLink :to="`/projects/${project.slug}`">
            <BaseBox>
              <p
                class="bg-amber-200 text-amber-900 font-bold rounded-full inline-block px-3 py-1 text-xs mb-3"
              >
                {{ project.creator }}
              </p>
              <h4 class="font-bold text-xl mb-4">{{ project.title }}</h4>
              <BaseRichTextRenderer :document="project?.description" />
            </BaseBox>
          </NuxtLink>
        </div>
      </BaseGrid>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const { data } = await useAsyncGql({
  operation: "queryProjects",
  variables: { preview: config.public.contentful.preview },
});

const projects = data?.value.contentProjectCollection?.items;
</script>
