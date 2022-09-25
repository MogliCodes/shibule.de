<template>
  <BaseContainer v-if="sections" container-width="standard">
    <WrapperDynamicContentfulElements
      :is-section="false"
      :sections="sections"
    />
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/base/BaseContainer.vue";

interface Props {
  entryId: string;
}
const props = defineProps<Props>();

const { data: sectionData } = await useAsyncGql({
  operation: "sectionGenericById",
  variables: { id: props.entryId },
});

const sections = sectionData.value.sectionGeneric.contentCollection.items;
</script>
