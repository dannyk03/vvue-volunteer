<template>
  <div class="avatars-wrap">
    <div class="avatars">
      <vv-avatar class="avatar" :src="avatars.userOne.avatar" :size="size" />
      <vv-avatar class="avatar me" :src="avatars.userTwo.avatar" :size="size" />          
    </div>
    <slot name='data' />
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'Avatars',
    components: {
      VvAvatar,
    },
    props: {
      avatars: null,
      size: null,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/index';
  
  .avatars-wrap {
    text-align: center;
    color: $primaryDark;
    font-size: 20px;
    font-weight: 500;

    .avatars {
      transform: translateX(11px);
      margin-bottom: 12px;

      .avatar {
        border: 3px solid white;

        &.me {
          transform: translateX(-22px);
        }
      }
    }

    .data-bottom {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      text-align: center;
      color: $primaryDark;
    }

    .data-left {
      .names {
        @include boldBodyFont;
        text-align: left;
      }
      .status {
        @include captionFont;
      }
    }
  }
</style>