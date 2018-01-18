<template>
  <div class="onboarding-code">
    <div v-if="codeValid">
      <h1 class="welcomeHeading display-1 mb-4"><span class="accented">Welcome</span> to the program <span class="accented fontAccented">e</span>start</h1>
      <vv-base-button
        @click="$router.push('2')"
        :disabled="!code"
        color="accent"
      >
        Get started
      </vv-base-button>
    </div>

    <div v-else>
      <h1 class="heading display-1 mb-4">Your first step to <span class="underlined">become</span> <span class="accented">a mentor</span></h1>
      <p class="subheading">To join Volunteer Vision you need a registration code provided by you company or your partner. Please enter it here</p>

      <vv-base-text-input class="input mb-4" v-model="code" label="Code" @keypress.native.enter="submitStep" />

      <div class="submit">
        <vv-base-button
          @click="submitStep"
          :disabled="!code"
          color="accent"
        >
          Submit
        </vv-base-button>
        <router-link class="mt-2" :to="{ name: 'login' }">I have an account</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingCode',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    code: '',
    codeValid: false,
  }),
  methods: {
    submitStep() {
      this.setCode({ code: this.code });
      this.$router.push('2');
    },
    ...mapMutations('public', {
      setCode: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    this.code = this.$store.getters['public/getInvitationCode'];
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/colors";

  .onboarding-code {
    width: 500px;
    display: grid;

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
  }
</style>
