<template>
  <li class="vv-invite-list-item">
    <div class="invite-avatar">
      <vv-avatar v-if="invite.user" :src="invite.user.avatar" size="32" />
      <div style="width: 32px; text-align: center" v-else>A</div>  <!-- temp -->
    </div>

    <div class="main ml-3">
      <div class="item-name" v-if="invite.user">{{ invite.user.firstName }} {{ invite.user.lastName }}</div>
      <div class="item-name" v-else>{{ invite.email }}</div>
      <div class="item-status">{{ invite.status }}</div>
    </div>

    <div class="status-mark">+</div>
  </li>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'InviteListItem',
    components: {
      VvAvatar,
    },
    props: {
      invite: {
        user: {
          avatar: String,
          firstName: String,
          lastName: String,
        },
        status: String,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-invite-list-item {
    display: flex;
    align-items: center;
    padding: 10px 0 13px;
    border-bottom: 1px solid lighten($secondaryGrey, 10%);

    .main {
      flex-grow: 2;
      line-height: 17px;

      .item-name {
        @include boldBodyFont;
      }

      .item-status {
        @include captionFont;
      }
    }
  }
</style>
