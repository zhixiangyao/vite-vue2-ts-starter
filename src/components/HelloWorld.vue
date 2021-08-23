<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
      |
      <a href="https://cn.vuejs.org" target="_blank">Vue 2 Documentation</a>
    </p>

    <button type="button" @click="count++"> count is: {{ count }} </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)

    return { count }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
