<template>
  <BaseContainer container-width="standard">
    <h1>SectionGenericWrapper</h1>
    <WrapperDynamicContentfulElements
      :is-section="false"
      :sections="props?.contentCollection?.items"
    />
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/base/BaseContainer.vue";

interface Props {
  contentCollection: Array<unknown>;
}

const props = defineProps<Props>();
</script>
