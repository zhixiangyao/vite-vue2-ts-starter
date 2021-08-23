import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

/**
 * https://vitejs.dev/config/
 */
export const userConfig = defineConfig({
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
