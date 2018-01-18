<template>
  <div class="onboarding-profile">
    <h1 class="display-1 mb-4">Create your profile and password</h1>

    <v-form class="grid" v-model="valid" ref="form" lazy-validation @submit.prevent="submitStep">
      <vv-base-text-input
        label="Email"
        name="email"
        :validation="rules.email"
        v-model="model.email"
      />

      <vv-base-text-input
        label="Password"
        autocomplete="new-password"
        class="mt2"
        type="password"
        :validation="rules.password"
        v-model="model.password"
      />

      <vv-base-button
        class="mt-3 submit"
        color="accent"
        type="submit"
      >
        Sign up
      </vv-base-button>
    </v-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvForm from '@/shared/components/BaseForm';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingProfile',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvForm,
  },
  data: () => ({
    valid: true,
    model: {
      email: '',
      password: '',
    },
    rules: {
      email: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      password: [
        v => !!v || 'Password is required',
      ],
    },
  }),
  methods: {
    submitStep() {
      if (this.$refs.form.validate()) {
        this.setProfileInfo({
          email: this.email,
          password: this.password,
        });
        this.$router.push('/auth/onboarding/3');
      }
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
    display: grid;

    form {
      width: 340px;
    }

    .grid {
      display: grid;
    }

    .submit {
      width: 150px;
    }
  }
</style>
