import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    defaultImport: 'component',
  },
  nitro: {
    preset: 'node_cluster',
  },
})
