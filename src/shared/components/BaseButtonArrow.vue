<template>
  <button class='btn-arrow'>
    <slot name='name'></slot>
    <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M0 0h16v16H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="red" fill-opacity="0" xlink:href="#a"/><path :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.062 12L10 8 6 4"/></g></svg>
  </button>
</template>
<script>
  export default {
    props: {
      color: {
        default: '#000000',
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import '~@/styles/index';

  .btn-arrow {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
    color: $primary;
    text-transform: uppercase;

    .name {
      display: inline-flex;
      margin-right: 2px;
    }

    .svg-icon {
      position: relative;
      top: -1px;
    }
  }
</style>


