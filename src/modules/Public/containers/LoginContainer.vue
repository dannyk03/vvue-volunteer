<template>
  <!-- TODO: i18n -->
  <div class="login-container">
    <vv-logo class="logo" color="white" />
    <div class="copyright">© Volunteer Vision GmbH 2017</div>

    <div class="main-image" />

    <div class="top-line">
      <v-btn
        class="ghost"
        @click="$router.push('/auth/onboarding')"
        round
        depressed
        outline
      >
        Registration
      </v-btn>
    </div>

    <v-form v-model="valid" ref="form" lazy-validation>
      <h1 class="display-1 mb-2">Welcome back</h1>
      <div class="subheading mb-4">Nice to see you again</div>

      <vv-base-text-input
        label="Email or Phone number"
        v-model="credentials.username"
      />

      <vv-base-text-input
        label="Password"
        type="password"
        v-model="credentials.password"
        @keypress.enter.native="submit"
      />

      <div class="forgot-link mb-4">
        <router-link :to="{ name: 'forgot' }">Forgot password?</router-link>
      </div>

      <v-btn
        class="submit-btn ma-0"
        @click="submit"
        :disabled="!valid"
        color="warning"
        depressed
        round
      >
        Sign In
      </v-btn>
    </v-form>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import VvFormField from '@/shared/components/FormField';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvLogo from '@/shared/components/Logo';

export default {
  name: 'LoginContainer',
  components: {
    VvFormField,
    VvBaseTextInput,
    VvBaseButton,
    VvLogo,
  },
  data: () => ({
    credentials: {
      username: '',
      password: '',
    },
    valid: true,
    // usernameRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    // ],
    checkbox: false,
  }),
  methods: {
    submit() {
      // if (this.$refs.form.validate()) {
      this.login(this.credentials)
        .then(() => this.$router.push('/home'))
        .catch(() => this.notifyError('Bad credentials')); // TODO: i18n
      // }
    },
    ...mapActions('global/auth', [
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .login-container {
    display: grid;
    grid-template-areas:
            "image  top"
            "image  form";
    grid-template-columns: 1fr 490px;
    grid-template-rows: 120px 1fr;
    height: 100vh;

    .main-image {
      grid-area: image;
      background: url('/static/images/login-main-image.jpg') center center;
      background-size: cover;
    }

    form {
      grid-area: form;
      padding: 0 80px;

      h1 {
        font-family: Gothic;
        text-transform: uppercase;
      }
    }

    .top-line {
      grid-area: top;
      text-align: right;
      justify-self: end;
      align-self: center;
      padding: 30px;
    }

    .forgot-link {
      text-align: right;
    }

    button {
      // border-radius: 28px;
      text-transform: none;
    }

    .logo {
      position: absolute;
      top: 40px;
      left: 40px;
    }

    .copyright {
      color: white;
      position: absolute;
      bottom: 40px;
      left: 40px;
    }

    .forgot-link {
      text-align: right;
      span {
        cursor: pointer;
      }
    }
  }
</style>
