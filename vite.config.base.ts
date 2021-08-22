import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

/**
 * https://vitejs.dev/config/
 */
export const userConfig = defineConfig({
  plugins: [createVuePlugin({})],
})
