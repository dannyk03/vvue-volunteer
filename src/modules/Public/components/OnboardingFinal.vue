<template>
  <div class="onboarding-final">
    <h1 class="display-1 mb-4">Welcome to the <span class="accented fontAccented">e</span>mentoring <span class="crossed">community</span></h1>

    <p class="subheading">Within the Mentor Community you will meet other like-minded mentors and exchange about your experience. Feel free to ask questions.</p>

    <div class="submit mt-4">
      <vv-base-button color="accent">Yes, I want to join the community</vv-base-button>
      <router-link class="mt-3" :to="{ name: 'login' }">No, I am only here for the Mentoring</router-link>
    </div>
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
  @import "~@/styles/colors";

  .onboarding-final {
    display: grid;

    .submit {
      width: 300px;
      text-align: center;
      display: grid;
    }

    .crossed {
      position: relative;
      &::before {
        content: 'family';
        font-family: Stay;
        position: absolute;
        top: -40px;
        font-size: 38px;
        color: $primary;
        text-transform: lowercase;
      }
      &::after {
        content: '';
        background: url('/static/images/figures/cross.png') no-repeat;
        background-size: contain;
        width: 150px;
        height: 15px;
        position: absolute;
        left: 20px;
        top: 10px;
        transform: scale(1.6);
      }
    }
  }
</style>
