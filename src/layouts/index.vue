<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '~/stores'
import LayoutMain from './components/LayoutMain.vue'
import LayoutNav from './components/LayoutNav.vue'
import ToggleButton from './components/ToggleButton.vue'

export default defineComponent({
  name: 'Default',
  components: {
    LayoutNav,
    LayoutMain,
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
    ]

    return { navbarList, appStore }
  },
})
</script>

<template>
  <div class="h-full w-full">
    <LayoutNav>
      <template #title>
        {{ appStore.getTitle }}
      </template>

      <template #default>
        <ul v-for="{ id, label, name } of navbarList" :key="id">
          <button
            :key="id"
            class="button text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium" :class="[
              name === $route.name && 'activated',
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
    </LayoutNav>

    <LayoutMain>
      <router-view />
    </LayoutMain>
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
