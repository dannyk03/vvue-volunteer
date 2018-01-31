<template>
  <div class="vv-navbar-user-menu">
    <vv-avatar class="mr-3" :src="user.avatar" size="35" />
    <span class="name">{{ user.name }}</span>
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'NavbarUserMenu',
    components: {
      VvAvatar,
    },
    props: {
      user: {
        name: String,
        avatar: String,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-navbar-user-menu {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: $primaryDark;

  }
</style>
