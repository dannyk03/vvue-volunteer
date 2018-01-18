<template>
  <!-- TODO: i18n -->
  <div class="forgot-container">
    <vv-logo class="logo" color="grey" />

    <div class="inner-wrapper">
      <vv-forgot-form v-if="!succeed" @submit="submit" />
      <vv-forgot-success />
    </div>
  </div>

</template>

<script>
// import { mapActions } from 'vuex';
import VvLogo from '@/shared/components/Logo';
import VvForgotForm from '../components/ForgotForm';
import VvForgotSuccess from '../components/ForgotSuccess';

export default {
  name: 'ForgotPasswordContainer',
  components: {
    VvLogo,
    VvForgotForm,
    VvForgotSuccess,
  },
  data() {
    return {
      succeed: false,
    };
  },
  methods: {
    submit() {
      this.succeed = true;
    },
    // ...mapActions('global/auth', [
    //   'login',
    // ]),
  },
};
</script>

<style lang="scss" scoped>
  .forgot-container {
    .logo {
      margin: 40px 0 0 80px;
    }
    .inner-wrapper {
      padding: 50px 0 0 80px;
    }
  }
</style>
