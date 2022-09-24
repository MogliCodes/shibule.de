<template>
  <div>
    {{ props.entryId }}
  </div>
</template>

<script setup lang="ts">
import { ConcreteComponent } from "vue";

const props = defineProps<{
  entryId: string | undefined;
}>();

const componentBindingsData = ref({});

let metaLink: MetaLink | null;
let styledText: StyledText | null;
if (props.entryId) {
  const { data: fragmentData } =
    await useFetchFragmentData<RichTextEmbeddedEntries>(
      props.entryId,
      GqlRichTextEmbeddedEntries,
      Date.now().toString(36) + Math.random().toString(36).substr(2)
    );
  metaLink = fragmentData?.value.metaLink;
  styledText = fragmentData?.value.fragmentStyledText;
  componentBindingsData.value = componentBindings();
}

function isButton() {
  return (
    metaLink?.style === "button-primary" ||
    metaLink?.style === "button-secondary"
  );
}
function getComponentProps() {
  return {
    type: getType(),
    to: getLink() || undefined,
    text: metaLink?.text,
    icon: metaLink?.icon,
    showArrow: metaLink?.showArrow || false,
    target: metaLink?.openInNewTab ? "_blank" : "_self",
    linkStyle: metaLink?.style,
  };
}
function getLink() {
  return getUrlFromEntryData(metaLink);
}
function getCurrentContentType() {
  if (styledText) return resolveComponent("WrapperBegaStyledTextWrapper");
  return "span";
}

function componentBindings() {
  if (metaLink) {
    return getComponentProps();
  }
  if (styledText) {
    return {
      semanticSettings: styledText.semanticSettings,
      spacing: styledText.spacing,
      text: reduceParagraph(styledText.text),
      textSize: styledText.textSize,
      textTransform: styledText.textTransform,
      isEmbedded: true,
    };
  }
  return {};
}
/**
 * Determine the required component based on the given link type
 */
function getType(): ConcreteComponent | string {
  if (metaLink.internalLink?.slug) {
    return resolveComponent("nuxt-link");
  }
  return "a";
}
</script>
