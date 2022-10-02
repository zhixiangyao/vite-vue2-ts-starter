<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
      |
      <a href="https://cn.vuejs.org" target="_blank">Vue 2 Documentation</a>
    </p>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
