// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerDirectives()],
  shortcuts: {
    'btn': 'inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg uppercase font-bold tracking-wider shadow-lg transition-colors text-gray-200',
    'btn--outline': 'inline-block py-3 px-6 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg hover:bg-elegiac dark:hover:bg-indigo-100 hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg',
    'btn--ghost': 'inline-block py-3 px-6 uppercase font-bold tracking-wider text-elegiac dark:text-indigo-100 hover:ring-2 ring-inset ring-elegiac dark:ring-indigo-100 rounded-lg transition-shadow',
    'badge--outline': 'inline-block py-2 px-5 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-full hover:bg-elegiac dark:hover:bg-indigo-100 hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg',
    'badge--active': 'inline-block py-2 px-5 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-full bg-elegiac dark:bg-indigo-100 text-indigo-100 dark:text-elegiac transition shadow-lg',
    'pills': 'inline-block py-1 px-3 text-sm uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-full bg-elegiac dark:bg-indigo-100 text-indigo-100 dark:text-elegiac',
    'form-label': 'block mb-3 font-bold tracking-wide',
    'form-input': 'w-full border-2 border-blue-500 px-3 py-3 bg-indigo-100 dark:bg-elegiac dark:text-gray-200 rounded-lg',
    'toast--success': 'inline-block font-bold uppercase px-4 py-2 rounded-lg bg-green-600 text-indigo-100 shadow-lg',
    'toast--warning': 'inline-block font-bold uppercase px-4 py-2 rounded-lg bg-yellow-600 text-indigo-100 shadow-lg',
    'toast--error': 'inline-block font-bold uppercase px-4 py-2 rounded-lg bg-red-500 text-indigo-100 shadow-lg',
  },
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
