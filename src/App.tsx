import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div id="app">
        <RouterView></RouterView>
      </div>
    )
  },
})
