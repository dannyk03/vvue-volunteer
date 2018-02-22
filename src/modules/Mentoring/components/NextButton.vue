<template>
  <vv-base-button
    class="vv-next-button"
    color="accent"
    type="button">
    {{ $t('common.labels.next') }}
    <vv-arrow-icon class="icon" target="right" :color="color" />
  </vv-base-button>
</template>

<script>
  import VvBaseButton from '@/shared/components/BaseButton';
  import VvArrowIcon from '@/shared/components/ArrowIcon';

  export default {
    name: 'NextButton',
    components: {
      VvBaseButton,
      VvArrowIcon,
    },
    props: {
      disabled: Boolean,
    },
    computed: {
      color() {
        return this.disabled ? '#c1c1c1' : 'white';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .vv-next-button {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 5px;
      margin-top: 2px;
    }
  }
</style>
