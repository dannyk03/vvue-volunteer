<template>
  <div class="vv-match">
    <div class="avatars">
      <vv-avatar class="avatar" :src="match.avatar" size="90" />
      <vv-avatar class="avatar me" :src="user.avatar.medium" size="90" />          
    </div>
    <div class='names'>{{ match.firstName }} & {{ user.firstName }}</div>
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'Match',
    components: {
      VvAvatar,
    },
    props: {
      user: {
        avatar: {
          medium: String,
        },
        firstName: String,
      },
      match: {
        firstName: String,
        avatar: String,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-match {
    text-align: center;
    color: $primaryDark;
    font-size: 20px;
    font-weight: 500;

    .avatars {
      transform: translateX(11px);

      .avatar {
        border: 3px solid white;

        &.me {
          transform: translateX(-22px);
        }
      }
    }

    .names {
      margin-top: 12px;
    }
  }
</style>