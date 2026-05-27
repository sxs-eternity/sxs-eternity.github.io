<script setup lang="ts">
import type { DefaultTheme } from 'vitepress'
import { useData } from 'vitepress'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'

import VPNavScreenMenuLink from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue'
import { computed, onMounted, ref } from 'vue'

const { theme } = useData<DefaultTheme.Config>()

// Used to avoid hydration issues.
const replace = ref(false)

onMounted(() => {
  replace.value = true
})
</script>

<template>
  <nav v-if="nav" class="VPNavScreenMenu">
    <template v-for="item in nav" :key="item.text">
      <VPNavScreenMenuLink
        v-if="'link' in item"
        :item="item"
      />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :items="item.items"
      />
    </template>
  </nav>
</template>
