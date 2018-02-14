<template>
  <div class="onboarding-code">
    <div class="form-wrapper" v-if="codeValid">
      <i18n path="onboarding.code.success.title" tag="h1" class="welcomeHeading display-1 mb-4">
        <span place="accent" class="accented" v-t="'onboarding.code.success.title.accent'" />
        <span place="accentCharE" class="accented fontAccented" v-t="'onboarding.code.success.title.accentCharE'" />
      </i18n>
      <div class="helper" />
      <vv-base-button
        :to="{ name: 'onboardingProfile' }"
        :disabled="!code"
        color="accent"
        class="get-started-btn"
      >
        {{ $t('onboarding.code.success.button.label') }}
      </vv-base-button>
    </div>

    <div class="form-wrapper" v-else>
      <i18n path="onboarding.code.title" tag="h1" class="heading display-1 mb-4">
        <span place="underline" class="underlined" v-t="'onboarding.code.title.underline'" />
        <span place="accent" class="accented" v-t="'onboarding.code.title.accent'" />
      </i18n>
      <p class="subheading" v-t="'onboarding.code.subtitle'" />

      <v-form class="form" v-model="valid" ref="form" lazy-validation @submit.prevent="validateCode">
        <div>
          <vv-base-text-input
            class="input mb-4"
            v-model="code"
            label="Code"
            :validation="validation"
          />
        </div>
        <div class="helper" />

        <div class="bottom">
          <div>
            <span class="fieldTitle" v-t="'common.fields.language'" />
            <vv-language-picker v-model="lang" class="mt-4" changeGlobal />
          </div>
          <div class="submit">
            <vv-base-button
              :disabled="!valid"
              color="accent"
              type="submit"
            >
              {{ $t('common.labels.submit') }}
            </vv-base-button>
            <router-link class="login-link mt-2" :to="{ name: 'login' }">
              {{ $t('onboarding.code.alreadyHaveAccount') }}
            </router-link>
          </div>
        </div>

      </v-form>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvLanguagePicker from '@/shared/components/select/LanguagePicker';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingCode',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvLanguagePicker,
  },
  data: () => ({
    lang: localStorage.getItem('language'),
    valid: true,
    code: '',
    codeValid: null,
  }),
  computed: {
    validation() {
      return [
        () => this.codeValid === false ? this.$t('onboarding.code.validation.invalid') : true, // eslint-disable-line
      ];
    },
  },
  methods: {
    validateCode() {
      this.checkInviteCode(this.code).then(
        () => { this.codeValid = true; },
      ).catch(
        () => {
          this.codeValid = false;
          this.$refs.form.validate();
        },
      );
    },
    ...mapMutations('public', {
      setCode: UPDATE_ONBOARDING_INFO,
    }),
    ...mapActions('public', [
      'checkInviteCode',
    ]),
  },
  mounted() {
    this.code = this.$store.getters['public/getInvitationCode'];
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/colors";
  @import "~@/styles/fonts";

  .onboarding-code {
    display: flex;
    flex-direction: column;
    height: 100%;

    .helper {
      flex-grow: 2;
    }

    .form-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 2;
    }

    .form {
      display: flex;
      flex-direction: column;
      flex-grow: 2;

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 26px;

        .fieldTitle {
          @include calloutFont;
        }

        .submit {
          position: relative;

          .login-link {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
          }
        }

      }
    }

    h1 {
      &.heading {
        width: 380px;
      }

      .accented {
        color: $primary;
      }

      .underlined {
        position: relative;
        &::after {
          content: '';
          background: url('/static/images/figures/underline.png') no-repeat;
          background-size: contain;
          width: 100px;
          height: 15px;
          position: absolute;
          left: 0;
          bottom: -25px;
          transform: scale(1.4);
        }
      }
    }

    .subheading {
      width: 370px;
    }

    .input {
      width: 300px;
    }

    .submit {
      width: 150px;
      text-align: center;
      display: grid;
    }

    .get-started-btn {
      width: 150px;
      align-self: flex-end;
      margin-bottom: 28px !important;
    }
  }
</style>
