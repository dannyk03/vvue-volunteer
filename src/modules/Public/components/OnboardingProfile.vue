<template>
  <div class="onboarding-profile">
    <h1>Create your profile and secure it</h1>

    <!-- <form @submit.prevent="submitStep">
      <vv-base-text-input placeholder="Email" v-model="email" />
      <vv-base-text-input autocomplete="new-password" class="mt2" placeholder="Password" type="password" v-model="password" />

      <vv-base-button class="mt3" :disabled="!email || !password">Continue</vv-base-button>
    </form> -->

    <vv-form class="grid" @submit="submitStep">
      <vv-base-text-input v-validate="'email'" placeholder="Email" name="email" v-model="email" />
      <vv-base-text-input autocomplete="new-password" class="mt2" placeholder="Password" type="password" v-model="password" />

      <vv-base-button class="mt3" :disabled="!email || !password">Continue</vv-base-button>
    </vv-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvForm from '@/shared/components/BaseForm';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingCode',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvForm,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    submitStep() {
      this.setProfileInfo({
        email: this.email,
        password: this.password,
      });
      this.$router.push('/auth/onboarding/3');
    },
    ...mapMutations('public', {
      setProfileInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    this.email = this.$store.getters['public/getEmail'];
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-profile {
    width: 500px;
    display: grid;

    .grid {
      display: grid;
    }
  }
</style>
