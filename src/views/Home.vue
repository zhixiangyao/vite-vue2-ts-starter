<template>
  <div>
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class="text-center" msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>
