import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  render(h) {
    return h('div', { attrs: { id: 'app' } }, [h('router-view')])
  },
})
