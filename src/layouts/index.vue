<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '/@/stores'

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

    return { navbarList, appStore }
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
              name === $route.name && 'activated',
              'button text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
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

<style scoped>
.button {
  @apply hover:bg-black;
}

.button.activated {
  @apply bg-black;
}

html.dark .button {
  @apply hover:bg-gray-700;
}

html.dark .button.activated {
  @apply bg-gray-700;
}
</style>
