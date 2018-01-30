<template>
  <div class="forgot-success-wrapper">
    <div>
      <div class="heading mb-4">
        <i18n path="forgotPassword.success.title" tag="h1" class="display-1 mb-2">
          <span place="accent" class="accented" v-t="'forgotPassword.success.title.accent'" />
        </i18n>
      </div>
      <p class="subheading mb-5" v-t="'forgotPassword.success.subtitle'"/>
      <vv-base-button
        class="ma-0"
        color="accent"
        :to="{name: 'login'}"
      >
        {{ $t('forgotPassword.success.buttonLabel') }}
      </vv-base-button>
    </div>

    <div class="main-image">
      <vv-base-icon name="airplane" width="335" height="311" backgroundColor="#eaeaea" />
    </div>
  </div>
</template>

<script>
import VvBaseIcon from '@/shared/components/BaseIcon';
import VvBaseButton from '@/shared/components/BaseButton';
import '@/../static/icons/compiled-svg/airplane';

export default {
  name: 'ForgotSuccess',
  components: {
    VvBaseIcon,
    VvBaseButton,
  },
  data: () => ({
    credentials: {
      email: '',
    },
    valid: true,
  }),
};
</script>

<style lang="scss" scoped>
@import '~@/styles/colors';

.forgot-success-wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 100vh;

  .accented {
    color: $primary;
  }

  .main-image {
    padding-right: 150px;
  }
}
</style>
