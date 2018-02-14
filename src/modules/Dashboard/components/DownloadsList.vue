<template>
  <vv-simple-card class="vv-downloads-list">
    <div slot="header" class="header">
      <span v-t="'dashboard.colleagues.downloadsList.title'" />
    </div>
    <div slot="content" class="content mt-4">

    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'DownloadsList',
    components: {
      VvSimpleCard,
    },
    props: {

    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-downloads-list {
    .header {
      @include calloutFont;
    }
  }
</style>
