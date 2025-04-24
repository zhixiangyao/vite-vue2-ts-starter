import type { ConfigEnv, UserConfigExport } from 'vite'
import fs from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue2'

import dotenv from 'dotenv'
import { defineConfig } from 'vite'

const baseConfig: UserConfigExport = {
  plugins: [vue()],
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
  const { VITE_APP_NODE_ENV } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  console.log('\x1B[33m%s\x1B[0m', `🏭--NODE ENV (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
