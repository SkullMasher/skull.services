// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerDirectives()],
  rules: [
    [/^halos-(.*)$/, ([className, classModifier], { theme }) => {
      const darkHalosCSS = {
        background: `
          radial-gradient(35% 40% at 7vw 60%, hsla(266.3, 45.6%, 49%, 0.7) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(30% 20% at 75% 30%, hsla(194.5, 76%, 50%, 0.5) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(60% 40% at 0% 12%,hsla(165, 75%, 62%, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(50% 20% at 50vw 0%, hsla(260, 80%, 50%, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(100% 100% at 100% 0%, hsla(216, 62%, 25%, 1) 0%, rgba(23, 66, 130, 0) 100%),
          ${theme.colors.elegiac.DEFAULT}
        `,
      }

      const lightHalosCSS = {
        background: `
          radial-gradient(30% 30% at 0% 10%, hsla(266.3, 45.6%, 65%, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(100% 100% at 100% 0%, hsl(234.5, 89.5%, 73.9%, 0.2) 0%, rgba(23, 66, 130, 0) 100%),
          radial-gradient(60% 30% at 70% 15%, hsla(223, 36%, 80%, 0.3) 0%, hsla(222.2, 60%, 75%, 0.3) 51.04%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(50% 70% at 50% 50%, hsla(180, 50%, 50%, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(50% 50% at 10% 50%,hsla(30, 60%, 60%, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
          ${theme.colors.indigo['50']}
        `,
      }

      if (classModifier === 'light')
        return lightHalosCSS

      if (classModifier === 'dark')
        return darkHalosCSS
    }],
  ],
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
    getCSS: ({ theme }) => `
    html { scroll-behavior: smooth; }
    body { font-family: Heebo, system-ui, sans-serif; }
    `,
  }],
})
