<template>
  <div class="onboarding-final mt-5">
    <img src="/static/images/stamp.png" width="240" height="220" />

    <i18n path="onboarding.final.title" tag="h1" class="display-1 mb-4 mt-5">
      <span place="accent" class="accented" v-t="'onboarding.final.title.accent'" />
    </i18n>

    <vv-base-button
      color="accent"
      :to="{ name: 'dashboard' }"
    >
      {{ $t('onboarding.final.action') }}
    </vv-base-button>
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

    h1 {
      text-align: center;
    }
  }
</style>
