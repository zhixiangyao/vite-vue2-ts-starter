import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

import type { UserConfigExport } from 'vite'

/**
 * https://vitejs.dev/config/
 */
export const baseConfig: UserConfigExport = {
  plugins: [
    // https://github.com/underfin/vite-plugin-vue2
    Vue2(),
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
}
