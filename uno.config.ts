// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerDirectives()],
  rules: [
    ['text-shadow-sm', { 'text-shadow': '0 0 3px hsla(0, 0%, 0%, 0.5)' }],
    [/^halos-(.*)$/, ([, classModifier], { theme }) => {
      const darkHalosCSS = {
        background: `
          radial-gradient(35% 40% at 7vw 60%, hsla(266.3, 45.6%, 49%, 0.7) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(30% 20% at 75% 30%, hsla(194.5, 76%, 50%, 0.5) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(60% 40% at 0% 12%,hsla(165, 75%, 62%, 0.4) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(50% 20% at 50vw 0%, hsla(260, 80%, 50%, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(100% 100% at 100% 0%, hsla(216, 62%, 25%, 1) 0%, rgba(23, 66, 130, 0) 100%),
          ${theme.colors.elegiac.DEFAULT}
        `,
      }

      const lightHalosCSS = {
        background: `
          radial-gradient(100% 100% at 100% 0%, hsla(234.5, 89.5%, 73.9%, 0.9) 0%, rgba(23, 66, 130, 0) 100%),
          radial-gradient(30% 30% at 0% 10%, hsla(266.3, 45.6%, 65%, 1) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(60% 30% at 70% 15%, hsla(223, 36%, 80%, 0.8) 0%, hsla(222.2, 60%, 75%, 0.8) 51.04%, rgba(0, 0, 0, 0) 100%),
          radial-gradient(50% 70% at 50% 50%, hsla(180, 50%, 50%, 0.4) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(50% 50% at 10% 50%,hsla(30, 60%, 60%, 0.8) 0%, rgba(255, 255, 255, 0) 100%),
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
    animation: {
      keyframes: {
        'skew': '{0%, 100% { transform: skewX(0deg) } 50% { transform: skewX(-25deg) }}',
        'wiggle': '{0%, 100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) }}',
        'float': '{0%, 100% { transform: translatey(0px) } 50% { transform: translatey(-30px) }}',
        'float-slower': '{0%, 100% { transform: translatey(0px) } 50% { transform: translatey(-30px) }}',
        'float-slow': '{0%, 100% { transform: translatey(0px) } 50% { transform: translatey(-30px) }}',
        'float-fast': '{0%, 100% { transform: translatey(0px) } 50% { transform: translatey(-30px) }}',
      },
      durations: {
        'skew': '3s',
        'wiggle': '2s',
        'float-slower': '10s',
        'float-slow': '8s',
        'float': '6s',
        'float-fast': '4s',
      },
      timingFns: {
        'skew': 'cubic-bezier(.68,-0.55,.27,1.55)',
        'wiggle': 'ease-in-out',
        'float-slower': 'ease-in-out',
        'float-slow': 'ease-in-out',
        'float': 'ease-in-out',
        'float-fast': 'ease-in-out',
      },
      counts: {
        'skew': 'infinite',
        'wiggle': 'infinite',
        'float-slower': 'infinite',
        'float-slow': 'infinite',
        'float': 'infinite',
        'float-fast': 'infinite',
      },
    },
  },
  preflights: [{
    getCSS: () => `
      html { scroll-behavior: smooth; }
      body { font-family: Heebo, system-ui, sans-serif; }
    `,
  }],
})
