<script setup lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import { useAppStore } from '~/stores'

defineComponent({ name: 'Home' })

const appStore = useAppStore()
</script>

<template>
  <div class="flex flex-col items-center">
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld class="text-center" msg="Hello Vue 2 + Vite" />

    <button
      class="inline-flex items-center justify-center rounded-md bg-green-300 p-2 text-black-400 hover:bg-green-400 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      type="button"
      @click="appStore.increment"
    >
      count is: {{ appStore.count }}
    </button>
  </div>
</template>
