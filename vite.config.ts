import type { ConfigEnv, UserConfigExport } from 'vite'
import fs from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue2'

import dotenv from 'dotenv'
import { defineConfig } from 'vite'

/**
 * https://vitejs.dev/config/
 */
const baseConfig: UserConfigExport = {
  plugins: [
    vue(),
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

export default ({ command, mode }: ConfigEnv) => {
  /**
   * Such as:
   * import.meta.env.MODE: {string}       app runtime 的模式。
   * import.meta.env.BASE_URL: {string}   部署 app 时的基本 URL 。他由 base 配置项决定。
   * import.meta.env.PROD: {boolean}      app 是否 runtime 在生产环境。
   * import.meta.env.DEV: {boolean}       app 是否 runtime 在开发环境 (永远与 import.meta.env.PROD 相反)。
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  setTimeout(() => {
    console.log()
    console.log('\x1B[33m%s\x1B[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
    console.log('\x1B[36m%s\x1B[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    console.log()
  }, 66)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
