<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '/@/stores'
import { useDark } from '/@/hooks'

import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import ToggleButton from './components/ToggleButton.vue'

export default defineComponent({
  name: 'Default',
  components: {
    Nav,
    Main,
    ToggleButton,
  },
  setup() {
    const appStore = useAppStore()
    const isDark = useDark()

    const navbarList = [
      {
        id: 1,
        label: 'Home',
        name: 'Home',
      },
      {
        id: 2,
        label: 'TensileColumn',
        name: 'TensileColumn',
      },
    ]

    return { navbarList, appStore, isDark }
  },
})
</script>

<template>
  <div class="h-full w-full">
    <Nav>
      <template #title>{{ appStore.getTitle }}</template>

      <template #default>
        <ul v-for="{ id, label, name } of navbarList">
          <button
            :key="id"
            :class="[
              name === $route.name ? (isDark ? 'dark:bg-gray-700' : 'bg-black') : `text-gray-300`,
              isDark ? 'dark:hover:bg-gray-700' : 'hover:bg-black',
              'text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
            ]"
            @click="$route.name !== name && $router.push({ name })"
          >
            {{ label }}
          </button>
        </ul>
      </template>

      <template #info>
        <ToggleButton />
      </template>
    </Nav>

    <Main>
      <router-view />
    </Main>
  </div>
</template>
