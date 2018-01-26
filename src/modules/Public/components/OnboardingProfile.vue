<template>
  <div class="onboarding-profile">
    <h1 class="display-1 mb-4">Create your profile and password</h1>

    <v-form class="grid" v-model="valid" ref="form" lazy-validation @submit.prevent="submitStep">
      <div class="fieldsWrapper">
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
      </div>

      <div class="helper" />

      <div class="bottom">
        <vv-back-button />
        <vv-base-button
          class="submit"
          color="accent"
          type="submit"
          :disabled="!valid"
        >
          Sign up
        </vv-base-button>
      </div>

    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvForm from '@/shared/components/BaseForm';
import notificationMixin from '@/shared/mixins/notificationMixin';

export default {
  name: 'OnboardingProfile',
  mixins: [notificationMixin],
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
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
        v => v.length >= 5 || 'The password must be at least 5 characters',
      ],
    },
  }),
  methods: {
    async submitStep() {
      if (this.$refs.form.validate()) {
        try {
          await this.registerUser(this.model);
          this.$router.push('3');
        } catch (e) {
          this.notifyError('This email already exists');
        }
      }
    },
    ...mapActions('public', [
      'registerUser',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-profile {
    height: 100%;
    display: flex;
    flex-direction: column;

    div.fieldsWrapper {
      width: 340px;
    }

    form {
      height: 100%;
      display: flex;
      flex-direction: column;

      .helper {
        flex-grow: 2;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;

        .submit {
          width: 150px;
          align-self: flex-end;
        }
      }
    }
  }
</style>
