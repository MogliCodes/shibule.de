<template>
  <div v-if="document">
    <RichTextRenderer
      :document="document.json"
      :node-renderers="renderNodes()"
      :mark-renderers="renderMarks()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, h } from "vue";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import ElementHyperLinkWrapper from "@/components/wrapper/ElementHyperlinkWrapper";
import BaseRichTextHelperEmbeddedEntryInline from "@/components/base/BaseRichTextHelperEmbeddedEntryInline";

const props = defineProps<{
  document: RichText;
}>();

const renderNodes = () => {
  return {
    [INLINES.HYPERLINK]: (node) => renderHyperLink(node),
    [INLINES.ENTRY_HYPERLINK]: (node) => renderEntryHyperLink(node),
    [INLINES.ASSET_HYPERLINK]: (node) => renderEntryHyperLink(node),
    [INLINES.EMBEDDED_ENTRY]: (node, key) =>
      renderEmbeddedEntryInline(node, key, h),
    [BLOCKS.EMBEDDED_ENTRY]: (node, key) =>
      renderEmbeddedEntryInline(node, key, h),
    EMBEDDED_PARAGRAPH: (node, key, next) => {
      return h(
        "span",
        {
          key,
        },
        next(node.content, key, next)
      );
    },
    EMBEDDED_PARAGRAPH_WITH_LINEBREAK: (node, key, next) => {
      return h(
        "span",
        {
          key,
          class: "block",
        },
        next(node.content, key, h, next)
      );
    },
    ACCENT_TEXT: (node, key) => renderAccentText(node, key),
  };
};
const renderMarks = () => {
  return {
    [MARKS.BOLD]: (text, key) => {
      return h("span", { key, class: "font-semibold rich-text-bold" }, text);
    },
  };
};

function renderEmbeddedEntryInline(node, key, h) {
  const entryId = node?.data?.target?.sys?.id;
  return h(BaseRichTextHelperEmbeddedEntryInline, {
    entryId,
  });
}

function renderEntryHyperLink(node) {
  const text = node.content[0].value;
  const entryId = node.data.target.sys.id;

  return h(ElementHyperLinkWrapper, {
    text,
    entryId,
  });
}
function renderHyperLink(node) {
  const text = node.content[0].value;
  const to = node.data.uri;

  return h(ElementHyperLinkWrapper, {
    text,
    to,
  });
}

function renderAccentText(node, key) {
  const text = node.value || "";
  const boldClass =
    node.marks[0]?.type === "bold" ? "font-semibold rich-text-bold" : "";
  return h("span", { key, class: ["text-primary", boldClass] }, text);
}
</script>
