<template>
  <div class="min-h-80 flex items-center">
    <div class="morph-wrap">
      <svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
        <path
          d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
        />
      </svg>
    </div>
    <BaseContainer>
      <h1
        class="font-display font-black text-center mb-8"
        :class="{
          'text-5xl lg:text-9xl': !isOnDetailPage,
        }"
      >
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
  isOnDetailPage?: boolean;
}
const props = defineProps<Props>();
const config = useRuntimeConfig();

const { data: sectionData } = await useAsyncGql({
  operation: "heroByEntryId",
  variables: { id: props.entryId, preview: config.public.contentful.preview },
});

const heroData = sectionData?.value?.sectionHero;
</script>

<style>
.morph-wrap {
  position: fixed;
  z-index: -1;
  opacity: 0.1;
}
</style>
