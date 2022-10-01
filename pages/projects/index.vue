<template>
  <BaseContainer class="min-h-screen flex items-center">
    <div class="w-full">
      <h1>Projects</h1>
      <BaseGrid columns="2">
        <div v-for="project in projects" :key="project.slug">
          <NuxtLink :to="`/projects/${project.slug}`">
            <div class="shadow-xl hover:shadow-2xl transition-all rounded p-8">
              <p
                class="bg-green-500 rounded-full inline-block px-4 py-1 text-xs mb-2"
              >
                {{ project.creator }}
              </p>
              <h4 class="font-bold text-xl mb-4">{{ project.title }}</h4>
              <BaseRichTextRenderer :document="project?.description" />
            </div>
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
