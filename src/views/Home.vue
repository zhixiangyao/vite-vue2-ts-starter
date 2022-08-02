<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<script setup lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class="text-center" msg="Hello Vue 2 + Vite" />
  </div>
</template>
