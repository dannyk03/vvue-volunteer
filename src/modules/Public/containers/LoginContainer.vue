<template>
  <!-- TODO: i18n -->
  <form class="login-container" @submit.prevent="submit">
    <vv-form-field label="Login">
      <vv-base-text-input slot="control" v-model="credentials.username" />
    </vv-form-field>

    <vv-form-field label="Password">
      <vv-base-text-input slot="control" type="password" v-model="credentials.password" />
    </vv-form-field>

    <p>SECRET_CODE: {{secret}}</p>

    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import VvFormField from '@/shared/components/FormField';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import { CLIENT_SECRET } from '@/shared/constants/env';

export default {
  name: 'LoginContainer',
  components: {
    VvFormField,
    VvBaseTextInput,
  },
  data: () => ({
    credentials: {
      username: '',
      password: '',
    },
    secret: CLIENT_SECRET,
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
    width: 300px;
    align-self: center;
    display: flex;
    flex-direction: column;
  }
</style>
