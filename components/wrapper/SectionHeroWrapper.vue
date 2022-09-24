<template>
  <BaseContainer>
    <h1 class="text-5xl text-center font-bold mb-4">{{ $attrs.headline }}</h1>
    <BaseRichTextRenderer class="text-lg text-center" :document="$attrs.text" />
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from "~/components/base/BaseContainer.vue";
import BaseRichTextRenderer from "~/components/base/BaseRichTextRenderer.vue";
</script>
