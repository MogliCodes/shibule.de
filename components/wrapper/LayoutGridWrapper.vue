<template>
  <div>
    <BaseGrid :columns="columns">
      <DynamicContentfulElements :sections="elements" :is-section="false" />
    </BaseGrid>
  </div>
</template>

<script setup lang="ts">
import DynamicContentfulElements from "~/components/wrapper/DynamicContentfulElements.vue";

interface Props {
  entryId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  entryId: null,
});

const { data: gridData } = await useAsyncGql({
  operation: "layoutGridById",
  variables: { id: props.entryId },
});

const elements = gridData.value.layoutGrid.elementsCollection.items;
const columns = gridData.value.layoutGrid.columns;
</script>
