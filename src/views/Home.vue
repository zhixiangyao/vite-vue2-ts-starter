<template>
  <div>
    <img class="m-auto" alt="Vue logo" :src="logo" />
    <HelloWorld class="text-center" msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HelloWorld from '/@/components/HelloWorld.vue'
import logo from '/@/assets/logo.png'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return { logo }
  },
})
</script>
