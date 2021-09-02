import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App',
  render(h) {
    return h('div', { attrs: { id: 'app' } }, [h('router-view')])
  },
})
