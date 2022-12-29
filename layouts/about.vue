<template>
  <div>
    <TheHeader />
    <slot></slot>
    <TheFooter />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "about",
});
</script>
