<template>
  <component :is="iconImport" v-bind="iconSize" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useIcons, Icon } from '../../composables/useIcons'
  defineOptions({ inheritAttrs: false })

  interface Props {
    name: Icon
    width?: number
    height?: number
  }
  const props = withDefaults(defineProps<Props>(), {})

  const iconImport = useIcons(props.name)

  const iconSize = computed(() => {
    const size = {}
    if (props.width) {
      Object.assign(size, { width: props.width + 'px' })
    }
    if (props.height) {
      Object.assign(size, { height: props.height + 'px' })
    }
    return size
  })
</script>

<style lang="scss" scoped>
  .ui-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
    }

    &--fill {
      fill: currentColor !important;
    }
  }
</style>
