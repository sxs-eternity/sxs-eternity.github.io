<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import { computed, onMounted, ref } from 'vue'

const { theme } = useData<DefaultTheme.Config>()

// Used to avoid hydration issues.
const replace = ref(false)

onMounted(() => {
  replace.value = true
})
</script>

<template>
  <nav v-if="nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
    <span id="main-nav-aria-label" class="visually-hidden">Main navigation</span>
    <template v-for="item in nav" :key="item.text">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<style lang="stylus" scoped>
.VPNavBarMenu {
  display: none
}

@media (min-width 768px) {
  .VPNavBarMenu {
    display: flex
  }
}
</style>
