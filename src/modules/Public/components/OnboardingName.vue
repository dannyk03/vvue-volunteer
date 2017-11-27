<template>
  <div class="onboarding-name">
    <h1>Let's know each other. Introduce yourself</h1>

    <vv-base-text-input placeholder="First Name" v-model="firstName" />
    <vv-base-text-input class="mt2" placeholder="Last Name" v-model="lastName" />

    <vv-base-button class="mt3" :disabled="!firstName || !lastName" @click.native="submitStep">Continue</vv-base-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingName',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    firstName: '',
    lastName: '',
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.$router.push('/auth/onboarding/4');
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    const data = this.$store.getters['public/getNameInfo'];
    Object.assign(this, data);
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-name {
    width: 500px;
    display: grid;
  }
</style>
