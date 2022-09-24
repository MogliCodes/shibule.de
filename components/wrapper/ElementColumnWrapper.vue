<template>
  <div>
    <h3>ElementColumn</h3>
    <WrapperDynamicContentfulElements
      :sections="elements"
      :is-section="false"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  elementsCollection: Array<unknown>;
}

const props = defineProps<Props>();

const elements = ref(props.elementsCollection.items);
</script>
