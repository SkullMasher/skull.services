export default {
  server: { port: 3001 },
  render: {
    asyncScripts : true,
    injectScripts: false,
    static: {
      maxAge: '1y'
    }
  },
  modern: true,
  loading: {
    color: 'blue',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skull.services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
