<template>
  <div class="back-button" @click="$router.go(-1)">
    <vv-icon class="mr-1" name="back" width="16" height="16" color="#6c6c72" />
    <span>back</span>
  </div>
</template>

<script>
import VvIcon from '@/shared/components/BaseIcon';
import '@/../static/icons/compiled-svg/back';

export default {
  name: 'BackButton',
  components: {
    VvIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/colors";
  @import "~@/styles/fonts";

  .back-button {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    span {
      @include calloutFont;
    }
  }
</style>
