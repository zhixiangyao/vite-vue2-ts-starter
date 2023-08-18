<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '/@/hooks'

export default defineComponent({
  name: 'Main',
  setup() {
    const isDark = useDark()

    return { isDark }
  },
})
</script>

<template>
  <main
    :class="[
      'flex flex-col justify-center items-center min-h-screen pt-16',
      isDark && 'dark:bg-black',
    ]"
  >
    <slot name="default" />
  </main>
</template>
