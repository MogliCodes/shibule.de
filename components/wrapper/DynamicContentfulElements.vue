<template>
  <component :is="sectionTag" v-for="(section, index) in sections" :key="index">
    <component
        v-bind="getComponentPropsWithHandledDefaults(section)"
        :entry-id="section?.sys?.id"
        :is="resolveComponentByTypename(section)"
    >
    </component>
  </component>
</template>

<script setup lang="ts">

interface Props {
  sections?: []
  isSection?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isSection: true,
})

function resolveComponentByTypename(component) {
  switch (component?.__typename) {
    case "SectionHero":
      return resolveComponent("WrapperSectionHeroWrapper");
    case "SectionGeneric":
      return resolveComponent("WrapperSectionGenericWrapper");
    case "LayoutGrid":
      return resolveComponent("WrapperLayoutGridWrapper");
    case "ElementColumn":
      return resolveComponent("WrapperElementColumnWrapper");
    case "ElementText":
      return resolveComponent("WrapperElementTextWrapper");
  }
}

function getComponentPropsWithHandledDefaults(component) {
  const handledComponentProps = {};
  Object.keys(component).forEach((property) => {
    handledComponentProps[property] =
        // vue component-prop defaults do only apply on undefined values
        component[property] !== null ? component[property] : undefined;
  });
  return handledComponentProps;
}

const sectionTag = computed<string>(() => (props.isSection ? 'section' : 'div'))
</script>

<style>
section {
  padding: 4rem 0;
}
</style>
