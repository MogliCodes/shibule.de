import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, _, savedPosition) {
    const nuxtApp = useNuxtApp();

    // If history back
    if (savedPosition) {
      // Handle Suspense resolution
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce("page:finish", () => {
          setTimeout(() => resolve(savedPosition), 50);
        });
      });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 500);
    });
  },
};
