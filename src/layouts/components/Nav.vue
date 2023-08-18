<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '/@/hooks'

export default defineComponent({
  name: 'Nav',
  setup() {
    const isDark = useDark()

    return { isDark }
  },
})
</script>

<template>
  <nav :class="['nav bg-gray-700 fixed top-0 left-0 w-screen z-10', isDark && 'dark:bg-black']">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div
        class="relative flex items-center justify-between h-16 overflow-x-auto overflow-y-hidden"
      >
        <div class="text-green-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
          <slot name="title" />
        </div>

        <div
          class="hidden sm:hidden md:hidden lg:flex xl:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="sm:block sm:ml-6">
            <div class="flex space-x-4 select-none">
              <slot name="default" />
            </div>
          </div>
        </div>

        <div class="flex text-blue-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
          <slot name="info" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding-top: env(safe-area-inset-top);
}
</style>
