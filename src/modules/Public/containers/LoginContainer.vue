<template>
  <!-- TODO: i18n -->
  <div class="login-container">
    <form class="login-form" @submit.prevent="submit">
      <vv-form-field label="Login">
        <vv-base-text-input slot="control" v-model="credentials.username" />
      </vv-form-field>

      <vv-form-field label="Password">
        <vv-base-text-input slot="control" type="password" v-model="credentials.password" />
      </vv-form-field>

      <vv-base-button type="submit" class="login-button">Login</vv-base-button>
      <vv-base-button type="button" class="registration-button" @click.native="$router.push('/auth/onboarding')">Registration</vv-base-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VvFormField from '@/shared/components/FormField';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';

export default {
  name: 'LoginContainer',
  components: {
    VvFormField,
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    credentials: {
      username: '',
      password: '',
    },
  }),
  methods: {
    submit() {
      this.login(this.credentials)
        .then(() => this.$router.push('/home'))
        .catch(() => console.error('Bad credentials'));
    },
    ...mapActions('global/auth', [
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-form {
      width: 300px;
      align-self: center;
      display: flex;
      flex-direction: column;
    }

    .login-button {
      margin-top: 10px;
    }

    .registration-button {
      margin-top: 20px;
    }
  }
</style>
