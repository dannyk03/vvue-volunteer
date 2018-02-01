<template>
  <vv-simple-card class="vv-invite-list">
    <div slot="header" class="header">
      <span v-t="'dashboard.colleagues.invites.title'" />
    </div>
    <div slot="content" class="content mt-4">
      <ul>
        <vv-invite-list-item v-for="item of list" :key="item.lastName" :invite="item" />
      </ul>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatar from '@/shared/components/Avatar';
  import VvInviteListItem from './InviteListItem';

  export default {
    name: 'InviteList',
    components: {
      VvSimpleCard,
      VvAvatar,
      VvInviteListItem,
    },
    props: {
      list: Array,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-invite-list {
    .header {
      @include calloutFont;
    }


  }
</style>
