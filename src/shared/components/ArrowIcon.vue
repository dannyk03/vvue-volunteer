<template>
  <vv-icon name="back" width="16" height="16" :fill="false" color="#6c6c72" />
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
    target: String,
    default: 'top',
  },
};
</script>
