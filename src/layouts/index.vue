<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import store from '/@/store'

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

    return { navbarList, store }
  },
})
</script>

<template>
  <div class="h-full w-full">
    <Nav>
      <template #title>{{ store.state.title }}</template>

      <template #default>
        <ul v-for="{ id, label, name } of navbarList">
          <button
            :key="id"
            :class="[
              name === $route.name ? 'dark:bg-gray-700 bg-black ' : `text-gray-300`,
              'dark:hover:bg-gray-700 hover:bg-black text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
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
