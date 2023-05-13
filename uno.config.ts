// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
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
