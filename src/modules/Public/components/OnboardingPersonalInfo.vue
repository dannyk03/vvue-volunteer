<template>
  <div class="onboarding-personal-info">
    <h1 class="display-1 mb-4"><span class="accented">Tell us a bit more</span> about yourself</h1>
    <vv-progress-simple :current="step" :total="3" />
    <router-view />
  </div>
</template>

<script>
import VvProgressSimple from '@/shared/components/ProgressSimple';

export default {
  name: 'OnboardingPersonalInfo',
  components: {
    VvProgressSimple,
  },
  data() {
    return {
      step: 1,
    };
  },
  watch: {
    $route(to) {
      this.step = to.path.slice(-1);
    },
  },
  mounted() {
    this.step = this.$route.path.slice(-1);
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .onboarding-personal-info {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
