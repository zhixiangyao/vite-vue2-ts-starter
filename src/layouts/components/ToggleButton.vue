<script lang="ts">
import { defineComponent } from 'vue'
import { useDark, useToggle } from '/@/hooks'

export default defineComponent({
  name: 'ToggleButton',
  props: {
    msg: String,
  },
  setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    return { isDark, toggleDark }
  },
})
</script>

<template>
  <div class="flex items-center justify-center">
    <label for="toggle" class="flex items-center cursor-pointer">
      <div class="relative">
        <input id="toggle" type="checkbox" :checked="isDark" class="sr-only" @change="toggleDark">
        <div class="block bg-gray-600 w-14 h-8 rounded-full" />
        <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
      </div>
    </label>
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  background-color: #48bb78;
  transform: translateX(100%);
}
</style>
