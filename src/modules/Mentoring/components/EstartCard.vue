<template>
  <vv-simple-card class="vv-estart-card">
    <div slot="header" class="header">
      <span>ESTART</span>
    </div>
    <div slot="content" class="content mt-4">

    </div>
  </vv-simple-card>
</template>

<script>
import VvSimpleCard from '@/shared/components/SimpleCard';

export default {
  name: 'EstartCard',
  components: {
    VvSimpleCard,
  },
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>
  .vv-estart-card {

  }
</style>
