<template>
  <!-- TODO: i18n -->
  <div class="forgot-container">
    <vv-logo class="logo" color="grey" />

    <v-form v-model="valid" ref="form" lazy-validation>
      <div class="heading mb-4">
        <h1 class="display-1 mb-2">Forgot password?</h1>
        <div class="arrow-wrapper">
          <img src="/static/images/figures/arrow-black.png" class="arrow" />
        </div>
        <div class="no-worries">No worries!</div>
      </div>

      <div class="subheading mb-4">Enter your email and we’ll help you</div>

      <vv-base-text-input
        label="Email"
        class="input mb-4"
        v-model="credentials.email"
      />

      <vv-base-button
        class="submit-btn ma-0"
        @click="submit"
        color="accent"
      >
        Reset password
      </vv-base-button>
    </v-form>

    <div class="main-image">
      <vv-base-icon name="lock" width="256" height="336" backgroundColor="#eaeaea"></vv-base-icon>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseIcon from '@/shared/components/BaseIcon';
import VvBaseButton from '@/shared/components/BaseButton';
import VvLogo from '@/shared/components/Logo';
import '@/../static/icons/compiled-svg/lock';

export default {
  name: 'ForgotPasswordContainer',
  components: {
    VvBaseTextInput,
    VvBaseIcon,
    VvBaseButton,
    VvLogo,
  },
  data: () => ({
    credentials: {
      email: '',
    },
    valid: true,
  }),
  methods: {
    submit() {
      // if (this.$refs.form.validate()) {
        // this.login(this.credentials)
        //   .then(() => this.$router.push('/home'))
        //   .catch(() => this.notifyError('Bad credentials')); // TODO: i18n
      // }
    },
    ...mapActions('global/auth', [
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .forgot-container {
    padding: 150px 0 0 80px;

    display: grid;
    grid-template-areas:
      "form image";
    grid-template-columns: 1fr 490px;
    grid-template-rows: 1fr;
    height: 100vh;

    .heading {
      display: flex;
      align-items: center;
    }

    form {
      grid-area: form;

      h1 {
        font-family: 'Gothic';
        text-transform: uppercase;
      }

      .input {
        width: 268px;
      }
    }

    .main-image {
      grid-area: image;
      justify-self: center;
    }

    .logo {
      position: absolute;
      top: 40px;
      left: 80px;
    }

    .arrow-wrapper {
      width: 50px;
      margin: 0 20px;
      .arrow {
        width: 11.9px;
        position: relative;
        left: 12px;
        transform: rotate(-90deg);
      }
    }

    .no-worries {
      font-family: 'Stay';
      font-size: 38px;
      color: $primary;
    }
  }
</style>
