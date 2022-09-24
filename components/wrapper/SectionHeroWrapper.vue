<template>
  <div class="min-h-80 flex items-center">
    <BaseContainer>
      <h1 class="text-5xl lg:text-9xl font-display font-black text-center mb-8">
        {{ heroData.headline }}
      </h1>
      <BaseRichTextRenderer
        class="text-lg text-center"
        :document="heroData.text"
      />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/base/BaseContainer.vue";
import BaseRichTextRenderer from "~/components/base/BaseRichTextRenderer.vue";

interface Props {
  entryId: string;
}
const props = defineProps<Props>();

const { data: sectionData } = await useAsyncGql({
  operation: "heroByEntryId",
  variables: { id: props.entryId },
});

const heroData = sectionData?.value?.sectionHero;
</script>
