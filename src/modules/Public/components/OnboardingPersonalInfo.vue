<template>
  <div class="onboarding-personal-info">
    <h1>Tell us more about yourself</h1>

    <vv-base-text-input placeholder="Birthday" v-model="birthday" />
    <vv-base-text-input class="mt2" placeholder="Gender" v-model="gender" />
    <vv-base-text-input class="mt2" placeholder="Living location" v-model="location" />

    <vv-base-button class="mt3" :disabled="!birthday || !gender || !location" @click.native="submitStep">Continue</vv-base-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingPersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    birthday: '',
    gender: '',
    location: '',
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        birthday: this.birthday,
        gender: this.gender,
        location: this.location,
      });
      this.$router.push('/auth/onboarding/5');
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    const data = this.$store.getters['public/getPersonalInfo'];
    Object.assign(this, data);
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-personal-info {
    width: 500px;
    display: grid;
  }
</style>
