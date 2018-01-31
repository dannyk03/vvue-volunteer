<template>
  <div class="back-button" @click="$router.go(-1)">
    <vv-arrow-icon target="left" />
    <span>back</span>
  </div>
</template>

<script>
import VvArrowIcon from '@/shared/components/ArrowIcon';
import '@/../static/icons/compiled-svg/back';

export default {
  name: 'BackButton',
  components: {
    VvArrowIcon,
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
    width: 80px;

    span {
      @include calloutFont;
    }
  }
</style>
