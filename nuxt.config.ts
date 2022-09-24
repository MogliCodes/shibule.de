import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  build: {
    transpile:
      process.env.SSR_MODE === "true" ? ["@contentful/rich-text-types"] : null,
  },
  runtimeConfig: {
    public: {
      gql: {
        clients: {
          default: {
            // https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}
            host: `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
            token: process.env.CONTENTFUL_API_KEY,
            retainToken: true,
          },
        },
      },
    },
  },
});
