
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "FlyDrone",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/filters/localization.filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-leaflet",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            file: "en.json",
          },
          {
            code: "ru",
            file: "ru.json",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ru",
        // strategy: "prefix",
        /*
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              test: "Hello",
            },
            ru: {
              test: "Привет",
            },
          },
        },
        */
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
