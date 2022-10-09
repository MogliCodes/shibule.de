<template>
  <component
    :is="sectionTag"
    v-for="(section, index) in sections"
    :key="index"
    :class="[backgroundColor(section), padding(section)]"
  >
    <component
      v-bind="getComponentPropsWithHandledDefaults(section)"
      :is="resolveComponentByTypename(section)"
      class="last:pb-16"
      :entry-id="section?.sys?.id"
      :is-on-detail-page="props.isOnDetailPage"
    >
    </component>
  </component>
</template>

<script setup lang="ts">
interface Props {
  sections?: [];
  isSection?: boolean;
  isOnDetailPage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isSection: true,
  sections: null,
  isOnDetailPage: false,
});

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
    case "ElementImage":
      return resolveComponent("WrapperElementImageWrapper");
    case "ElementVideo":
      return resolveComponent("WrapperElementVideoWrapper");
    case "ElementCard":
      return resolveComponent("WrapperElementCardWrapper");
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

function backgroundColor(component) {
  if (component?.background) {
    return component?.background === "light-gray" ? "bg-gray-100" : "";
  }
}

function padding(component) {
  if (component.__typename) {
    return component.__typename === "SectionHero"
      ? "min-h-screen flex items-center justify-center"
      : "";
  }
}

const sectionTag = computed<string>(() =>
  props.isSection ? "section" : "div"
);
</script>

<style>
section {
  padding: 4rem 0;
}
</style>
