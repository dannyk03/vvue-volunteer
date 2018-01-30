<template>
  <vv-icon :class="`vv-arrow-icon ${target}`" name="back" width="16" height="16" :fill="false" :color="color" />
</template>

<script>
import VvIcon from '@/shared/components/BaseIcon';
import '@/../static/icons/compiled-svg/back';

export default {
  name: 'ArrowIcon',
  components: {
    VvIcon,
  },
  props: {
    target: {
      type: String,
      default: 'left',
    },
    color: {
      type: String,
      default: '#6c6c72',
    }
  },
};
</script>

<style lang="scss" scoped>
  .vv-arrow-icon {
    &.right {
      transform: rotate(180deg);
    }
  }
</style>
