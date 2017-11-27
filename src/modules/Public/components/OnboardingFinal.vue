<template>
  <div class="onboarding-final">
    <h1>Welcome to the ementoring community</h1>

    <vv-base-button>Go into the community</vv-base-button>
  </div>
</template>

<script>
import VvBaseButton from '@/shared/components/BaseButton';

export default {
  name: 'OnboardingFinal',
  components: {
    VvBaseButton,
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-final {
    width: 500px;
    display: grid;
  }
</style>
