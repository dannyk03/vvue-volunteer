<template>
  <!-- TODO: i18n -->
  <div class="login-container">
    <vv-logo class="logo" color="white" />
    <div class="copyright" v-t="'common.labels.copyright'" />

    <div class="main-image" />

    <div class="top-line">
      <vv-base-button
        color="secondary"
        outline
        :to="{name: 'onboarding'}"
      >
        {{ $t('common.labels.registration') }}
      </vv-base-button>
    </div>

    <v-form v-model="valid" ref="form" lazy-validation>
      <h1 class="display-1 mb-2" v-t="'login.title'" />
      <div class="subheading mb-4" v-t="'login.subtitle'" />

      <vv-base-text-input
        :label="$t('login.fields.email.label')"
        v-model="credentials.username"
      />

      <vv-base-text-input
        :label="$t('login.fields.password.label')"
        type="password"
        v-model="credentials.password"
        @keypress.enter.native="submit"
      />

      <div class="forgot-link mb-4">
        <router-link :to="{ name: 'forgot' }">{{ $t('login.labels.forgotPassword') }}</router-link>
      </div>

      <vv-base-button
        class="submit-btn"
        @click="submit"
        :disabled="!valid"
        color="accent"
      >
        {{ $t('login.labels.signIn') }}
      </vv-base-button>
    </v-form>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import VvFormField from '@/shared/components/FormField';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvLogo from '@/shared/components/Logo';
import notificationMixin from '@/shared/mixins/notificationMixin';

export default {
  name: 'LoginContainer',
  mixins: [notificationMixin],
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
    checkbox: false,
  }),
  methods: {
    async submit() {
      try {
        await this.login(this.credentials);
        this.$router.push('/home');
      } catch (e) {
        debugger;
        this.notifyError('Bad credentials');
      }
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
