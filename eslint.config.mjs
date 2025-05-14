// @ts-check
import antfu from '@antfu/eslint-config'
// import tailwind from '@hyoban/eslint-plugin-tailwindcss'
// import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      typescript: true,
      vue: true,
    },
    // ...tailwind.configs['flat/recommended'],
    // {
    //   settings: {
    //     tailwindcss: {
    //       config: 'app/assets/app.css',
    //     },
    //   },
    // },
  ),
)
