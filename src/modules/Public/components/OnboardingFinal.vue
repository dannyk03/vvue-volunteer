<template>
  <div class="onboarding-final mt-5">
    <img src="/static/images/stamp.png" width="240" height="220" />
    <h1 class="display-1 mt-5 mb-4">Yeah you registered <span class="accented">successfully!</span></h1>
    <vv-base-button color="accent">Continue to Dashboard</vv-base-button>
  </div>
</template>

<script>
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvIcon from '@/shared/components/BaseIcon';

export default {
  name: 'OnboardingFinal',
  components: {
    VvBaseButton,
    VvBackButton,
    VvIcon,
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-final {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
