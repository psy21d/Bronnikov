<template>
  <VIcon :name="Icon.MonoWallet" />
  Lorem
  <router-view />
</template>

<script setup lang="ts">
  import VIcon from '@/components/UI/VIcon.vue'
  import { Icon } from '@/composables/useIcons'
</script>

<style lang="scss">
  @import '@/assets/styles/global.scss';
</style>
