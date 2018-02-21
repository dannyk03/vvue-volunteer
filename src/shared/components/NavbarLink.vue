<template>
  <v-btn color="white" class="vv-navbar-link" :ripple="false" flat :to="{ name: to, params: params }">
    <menuitem>
      <slot />
    </menuitem>
  </v-btn>
</template>

<script>
  export default {
    name: 'NavbarLink',
    props: {
      to: String,
      params: Object,
      exact: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-navbar-link {
    width: 120px;
    border-radius: 0 !important;
    background-color: white !important;

    &.btn--active {
      border-bottom: solid 3px $primaryGrey;
      menuitem {
        margin-top: 3px;
        color: $primaryGrey;
      }
    }

    menuitem {
      font-weight: 600;
      color: $secondaryGrey;
    }
  }
</style>
