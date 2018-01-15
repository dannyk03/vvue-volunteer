<template>
  <div class="onboarding-personal-info">
    <h1 class="display-1 mb-4"><span class="accented">Tell us a bit more</span> about yourself</h1>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'OnboardingPersonalInfo',
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .onboarding-personal-info {
    display: grid;
    width: 480px;
  }
</style>
