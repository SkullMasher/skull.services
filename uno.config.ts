// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      elegiac: {
        light: 'hsl(214, 45%, 45%)',
        DEFAULT: 'hsl(214, 45%, 30%)',
        dark: 'hsl(214, 45%, 25%)',
      },
    },
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        body {
          font-family: Heebo, system-ui, sans-serif;
        }
      `,
    },
  ],
})
