<template>
  <div class="shadow-2xl bg-white p-8 rounded-lg">
    <img class="mb-4" style="max-height: 80px" :src="props?.icon?.url" alt="" />
    <BaseRichTextRenderer :document="props.text" />
  </div>
</template>

<script setup lang="ts">
interface ICardProps {
  title: string;
  icon: {
    url: string;
  };
  text: {
    json: {
      content: [];
    };
  };
}

const props = defineProps<ICardProps>();
</script>
