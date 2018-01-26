<template>
  <div class="onboarding-code">
    <div class="form-wrapper" v-if="codeValid">
      <h1 class="welcomeHeading display-1 mb-4"><span class="accented">Welcome</span> to the program <span class="accented fontAccented">e</span>start</h1>
      <div class="helper" />
      <vv-base-button
        :to="{ name: 'onboardingProfile' }"
        :disabled="!code"
        color="accent"
        class="get-started-btn"
      >
        Get started
      </vv-base-button>
    </div>

    <div class="form-wrapper" v-else>
      <h1 class="heading display-1 mb-4">Your first step to <span class="underlined">become</span> <span class="accented">a mentor</span></h1>
      <p class="subheading">To join Volunteer Vision you need a registration code provided by you company or your partner. Please enter it here</p>

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
          <div>LANGUAGE PICKER</div>
          <div class="submit">
            <vv-base-button
              :disabled="!code"
              color="accent"
              type="submit"
            >
              Submit
            </vv-base-button>
            <router-link class="mt-2" :to="{ name: 'login' }">I have an account</router-link>
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
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingCode',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
  },
  data: () => ({
    valid: true,
    code: '',
    codeValid: null,
  }),
  computed: {
    validation() {
      return [
        () => this.codeValid === false ? 'Invalid code' : true, // eslint-disable-line
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
        align-items: center;
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
