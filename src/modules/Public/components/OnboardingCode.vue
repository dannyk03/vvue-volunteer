<template>
  <div class="onboarding-code">
    <h1>Your first step to become a mentor</h1>
    <p>To join Voluteer Vision you need a registration code</p>

    <vv-base-text-input v-model="code" />
    <vv-base-button class="mt3" :disabled="!code" @click.native="submitStep">Start</vv-base-button>

    <router-link class="mt4" :to="{ name: 'login' }">I have an account</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingCode',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    code: '',
  }),
  methods: {
    submitStep() {
      this.setCode({ code: this.code });
      this.$router.push('/auth/onboarding/2');
    },
    ...mapMutations('public', {
      setCode: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    this.code = this.$store.getters['public/getInvitationCode'];
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-code {
    width: 500px;
    display: grid;
  }
</style>
