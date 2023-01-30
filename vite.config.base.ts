import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

import type { UserConfigExport } from 'vite'

/**
 * https://vitejs.dev/config/
 */
export const baseConfig: UserConfigExport = {
  plugins: [
    // https://github.com/underfin/vite-plugin-vue2
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-preset-jsx
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
}
