<template>
  <div class="onboarding-name">
    <h1 class="display-1 mb-4">Let’s know each and be friends. <span class="accented">Introduce yourself</span></h1>

    <div class="form">
      <div class="line">
        <vv-base-text-input label="First name" class="mr-2" placeholder="First Name" v-model="firstName" />
        <vv-base-text-input label="Last name" placeholder="Last Name" v-model="lastName" />
      </div>

      <vv-base-text-input label="Your phone number" mask="phone" class="mr-2" placeholder="First Name" v-model="firstName" />
      <vv-base-text-input label="Is it your Whatsapp number?" class="mr-2" placeholder="First Name" v-model="firstName" />

      <vv-base-button
        color="accent"
        class="mt-3"
        :disabled="!firstName || !lastName"
        @click.native="submitStep"
      >
        Next >
      </vv-base-button>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingName',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    firstName: '',
    lastName: '',
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.$router.push('/auth/onboarding/4');
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    const data = this.$store.getters['public/getNameInfo'];
    Object.assign(this, data);
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-name {
    display: grid;
    width: 480px;

    .form {
      width: 340px;
    }

    .line {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
