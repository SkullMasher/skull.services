// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      elegiac: {
        light: 'hsl(214, 45%, 45%)',
        DEFAULT: 'hsl(214, 45%, 30%)',
        dark: 'hsl(214, 45%, 25%)',
      },
    },
  },
  preflights: [{
    getCSS: () => `
    body { font-family: Heebo, system-ui, sans-serif; }
  `,
  }],
})
