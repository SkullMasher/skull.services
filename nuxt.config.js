export default {
  server: {
    port: 3001,
    timing: {
      total: true, // tracks the whole time spent on server-side rendering
    },
  },
  render: {
    asyncScripts : true,
    static: {
      maxAge: '1y',
    },
  },
  modern: true,
  loading: {
    color: 'blue',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Florian Ledru - Informaticien freelance au service des PME',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Votre entreprise a besoin de visibilités pour vendre sur internet. Je réalise des sites web et applications simple et ergonomique pour vous accompagner."
      },
      { hid: 'og:locale', name: 'og:locale', content: 'fr_FR' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://skullmasher.io' },
      { hid: 'og:title', name: 'og:title', content: 'Florian Ledru - Informaticien freelance au service des PME' },
      { hid: 'og:site_name', name: 'og:title', content: 'Florian Ledru - Informaticien freelance au service des PME' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Votre entreprise a besoin de visibilités pour vendre sur internet. Je réalise des sites web et applications simple et ergonomique pour vous accompagner.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://skullmasher.io/og-image.jpg',
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:domain', property: 'twitter:domain', content: 'skullmasher.io' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://skullmasher.io/' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Florian Ledru - Informaticien freelance au service des PME' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Votre entreprise a besoin de visibilités pour vendre sur internet. Je réalise des sites web et applications simple et ergonomique pour vous accompagner.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://skullmasher.io/og-image.jpg' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  //Server Middleware https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/
  serverMiddleware: {
    '/api': '~/api/formchecker.js',
  },

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3001',
  },
  privateRuntimeConfig: {
    mailuser: process.env.MAIL_USER,
    mailpass: process.env.MAIL_PASS,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // https://github.com/nuxt/postcss8
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt images configuration: https://image.nuxtjs.org/api/options
  image: {
    // domains: ['https://skullmasher.io'],
    // dir: 'assets/img'
  },

  // https://color-mode.nuxtjs.org/#tailwind-v2
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  // Google font configuration: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap',
    download: true,
    base64: false,
    subsets: 'latin',
    families: {
      Heebo: {
        wght: [100, 400, 700],
      },
    },
  },
}
