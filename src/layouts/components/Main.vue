<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Main',
})
</script>

<template>
  <main class="flex flex-col justify-center items-center dark:bg-black min-h-screen pt-16">
    <slot name="default" />
  </main>
</template>
