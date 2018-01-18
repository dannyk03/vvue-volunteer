<template>
  <div class="forgot-form-wrapper">
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
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseIcon from '@/shared/components/BaseIcon';
import VvBaseButton from '@/shared/components/BaseButton';
import '@/../static/icons/compiled-svg/lock';

export default {
  name: 'ForgotForm',
  components: {
    VvBaseTextInput,
    VvBaseIcon,
    VvBaseButton,
  },
  data: () => ({
    credentials: {
      email: '',
    },
    valid: true,
  }),
  methods: {
    submit() {
      this.$emit('submit', this.credentials);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/colors';

.forgot-form-wrapper {
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

    .input {
      width: 268px;
    }
  }

  .main-image {
    grid-area: image;
    justify-self: center;
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
