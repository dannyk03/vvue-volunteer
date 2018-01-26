<template>
  <div class="onboarding-container">
    <div class="main-image" />

    <div class="top">
      <div>
        <vv-logo color="grey" />
        <vv-progress-dots class="progress-indicator" :current="step" :total="5" />
      </div>
    </div>

    <div class="step">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import VvLogo from '@/shared/components/Logo';
  import VvProgressDots from '@/shared/components/ProgressDots';
  import VvOnboardingCode from '../components/OnboardingCode';

  export default {
    name: 'OnboardingContainer',
    components: {
      VvOnboardingCode,
      VvLogo,
      VvProgressDots,
    },
    data() {
      return {
        step: 1,
      };
    },
    computed: {
      showBack() {
        const disabledStepBack = [3];
        return !disabledStepBack.includes(parseInt(this.step, 10));
      },
    },
    methods: {
      ...mapActions('global/auth', [
        'checkAuthentication',
      ]),
    },
    watch: {
      $route(to) {
        this.step = to.path.match(/onboarding\/(\d)/)[1];
      },
    },
    mounted() {
      this.step = this.$route.path.match(/onboarding\/(\d)/)[1];
      this.checkAuthentication();
    },
  };
</script>

<style scoped type="text/scss" lang="scss">
  .onboarding-container {
    display: grid;

    grid-template-areas:
      "image  top  "
      "image  step ";
    grid-template-columns: 520px 1fr;
    grid-template-rows: 130px 1fr;
    height: 100vh;

    .main-image {
      grid-area: image;
      background: no-repeat url('/static/images/onboarding-main-image.jpg') center center;
      background-size: cover;
    }

    .top {
      grid-area: top;
      margin: 30px 80px 30px 80px;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .step {
      grid-area: step;
      margin: 0 80px 21px 80px;
    }

    .top, .step {
      max-width: 700px;
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
