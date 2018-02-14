<template>
  <vv-simple-card class="vv-system-check">
    <div slot="header" class="header">
      <span>SYSTEM</span>
    </div>
    <div slot="content" class="content mt-4">

    </div>
  </vv-simple-card>
</template>

<script>
import VvSimpleCard from '@/shared/components/SimpleCard';

export default {
  name: 'SystemCheck',
  components: {
    VvSimpleCard,
  },
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>
  .vv-system-check {

  }
</style>
