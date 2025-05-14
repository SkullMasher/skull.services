import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'nuxt-security',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/app.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  security: {
    requestSizeLimiter: {
      maxRequestSizeInBytes: 100000, // 100Ko
    },
  },

  runtimeConfig: {
    smtpUser: '',
    smtpPass: '',
  },
})
