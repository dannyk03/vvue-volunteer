<template>
  <div>
    OnboardingContainer
    <router-view />
  </div>
</template>

<script>
  import VvOnboardingCode from '../components/OnboardingCode';

  export default {
    name: 'OnboardingContainer',
    components: {
      VvOnboardingCode,
    },
  };
</script>

<style scoped type="text/scss" lang="scss">

</style>
