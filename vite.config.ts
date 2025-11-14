import type { ConfigEnv, UserConfigExport } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

const baseConfig: UserConfigExport = {
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '~',
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

export default ({ command }: ConfigEnv) => {
  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
