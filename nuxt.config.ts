// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "",
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "nuxt-primevue",
    "@vee-validate/nuxt",
    "nuxt3-leaflet",
    "@nuxt/image",
  ],
  primevue: {
    components: {
      prefix: "P",
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "/css/default.css",
  ],
  devServer: {
    host: "0.0.0.0",
  },
});
