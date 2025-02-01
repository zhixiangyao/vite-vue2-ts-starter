import { createPinia, defineStore, PiniaVuePlugin } from 'pinia'
import Vue, { computed, ref } from 'vue'

Vue.use(PiniaVuePlugin)

export const useAppStore = defineStore('app', () => {
  const count = ref(0)
  const title = 'Vite + Vue2.7+'
  const getTitle = computed(() => title + count.value)

  function increment() {
    count.value++
  }

  return { count, getTitle, increment }
})

export const pinia = createPinia()
