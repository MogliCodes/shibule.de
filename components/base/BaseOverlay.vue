<template>
  <div
    class="fixed z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center"
    :class="{
      'pointer-events-none opacity-0': !isVisible,
    }"
  >
    <div ref="target" class="bg-white max-w-xl p-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis
      deserunt dolores fugit illo in ipsam nostrum porro saepe unde!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const target = ref(null);

const isVisible = ref(true);
onClickOutside(target, (e) => {
  isVisible.value = !isVisible.value;
});
</script>
