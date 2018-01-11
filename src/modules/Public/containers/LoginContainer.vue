<template>
  <!-- TODO: i18n -->
  <div class="login-container">
    <v-form v-model="valid" ref="form" lazy-validation>
      <vv-base-text-input
        required
        label="Username"
        v-model="credentials.username"
        :validation="usernameRules"
      />

      <vv-base-text-input
        label="Password"
        type="password"
        v-model="credentials.password"
        required
        @keypress.enter.native="submit"
      />

      <v-btn
        class="submit-btn"
        @click="submit"
        :disabled="!valid"
      >
        login
      </v-btn>
    </v-form>
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
    valid: true,
    usernameRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    checkbox: false,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.login(this.credentials)
          .then(() => this.$router.push('/home'))
          .catch(() => this.notifyError('Bad credentials')); // TODO: i18n
      }
    },
    ...mapActions('global/auth', [
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  // .login-container {
  //   width: 300px;
  //   align-self: center;
  //   display: flex;
  //   flex-direction: column;
  // }

  .login-container {
    align-self: center;
    width: 80%;
    max-width: 400px;

    form {
      display: grid;
    }
  }
</style>
