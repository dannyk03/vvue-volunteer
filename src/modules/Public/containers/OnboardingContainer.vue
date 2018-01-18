<template>
  <div class="onboarding-container">
    <div class="main-image" />

    <div class="top">
      <vv-logo color="grey" class="mb-4" />
      <vv-back-button />
    </div>

    <div class="step">
      <router-view />
    </div>

    <vv-progress-dots class="progress-indicator" :current="step" :total="5" />
  </div>
</template>

<script>
  import VvLogo from '@/shared/components/Logo';
  import VvBackButton from '@/shared/components/BackButton';
  import VvProgressDots from '@/shared/components/ProgressDots';
  import VvOnboardingCode from '../components/OnboardingCode';

  export default {
    name: 'OnboardingContainer',
    components: {
      VvOnboardingCode,
      VvLogo,
      VvBackButton,
      VvProgressDots,
    },
    data() {
      return {
        step: 1,
      };
    },
    watch: {
      $route(to) {
        this.step = to.path.match(/onboarding\/(\d)/)[1];
      },
    },
    mounted() {
      this.step = this.$route.path.match(/onboarding\/(\d)/)[1];
    },
  };
</script>

<style scoped type="text/scss" lang="scss">
  .onboarding-container {
    display: grid;

    grid-template-areas:
      "image  top"
      "image  step"
      "image  progress";
    grid-template-columns: 520px 1fr;
    grid-template-rows: 150px 1fr 100px;
    height: 100vh;

    .main-image {
      grid-area: image;
      background: no-repeat url('/static/images/onboarding-main-image.jpg') center center;
      background-size: cover;
    }

    .top {
      grid-area: top;
      margin-top: 30px;
      margin-left: 80px;
    }

    .step {
      grid-area: step;
      margin-left: 80px;
    }

    .progress-indicator {
      grid-area: progress;
      justify-self: end;
      align-self: end;
      padding: 0 50px 50px 0;
    }
  }
</style>

<style lang="scss">
  @import "~@/styles/colors";

  .onboarding-container {
    h1 {
      font-family: Gothic;
      text-transform: uppercase;
    }

    .accented {
      color: $primary;
    }
  }
</style>
