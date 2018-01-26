<template>
  <div class="onboarding-name">
    <h1 class="display-1 mb-4">Let’s know each and be friends. <span class="accented">Introduce yourself</span></h1>

    <v-form class="form" v-model="valid" ref="form" lazy-validation @submit.prevent="submitStep">
      <div class="fieldsWrapper">
        <div class="line">
          <vv-base-text-input
            label="First name"
            class="mr-2"
            v-model="model.firstName"
            :validation="rules.firstName"
          />
          <vv-base-text-input
            label="Last name"
            v-model="model.lastName"
            :validation="rules.lastName"
          />
        </div>

        <vv-base-text-input
          label="Your phone number"
          mask="phone"
          class="mr-2"
          placeholder="First Name"
          v-model="model.phoneNumber"
          :validation="rules.phoneNumber"
        />

        <vv-base-select
          class="mr-2"
          label="Is it your Whatsapp number?"
          :items="whatsAppOptions"
          v-model="isNumberWhatsApp"
        />

        <vv-base-text-input
          v-if="isNumberWhatsApp === 'A'"
          label="Your Whatsapp number"
          mask="phone"
          class="mr-2"
          v-model="model.whatsappNumber"
        />
      </div>

      <div class="helper" />

      <div class="bottom">
        <vv-back-button />
        <vv-base-button
          color="accent"
          class="mt-3"
          :disabled="!valid"
          type="submit"
        >
          Next

        </vv-base-button>
      </div>
    </v-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import pick from 'lodash/pick';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvBaseSelect from '@/shared/components/select/BaseSelect';

export default {
  name: 'OnboardingName',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvBaseSelect,
  },
  data: () => ({
    valid: true,
    model: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      whatsappNumber: '',
    },
    isNumberWhatsApp: '',
    whatsAppOptions: [
      { value: 'Y', text: 'Yes, it’s my Whatsapp number' },
      { value: 'A', text: 'No, I enter another' },
      { value: 'N', text: 'No, I don’t have Whatsapp' },
    ],
    rules: {
      firstName: [v => !!v || 'First name is required'],
      lastName: [v => !!v || 'Last name is required'],
      phoneNumber: [v => !!v || 'Phone number is required'],
    },
  }),
  watch: {
    isNumberWhatsApp(value) {
      this.model.whatsappNumber = value === 'Y' ? this.model.phoneNumber : '';
    },
  },
  methods: {
    async submitStep() {
      if (this.$refs.form.validate()) {
        await this.updateProfile(this.model);
        this.$router.push('4');
      }
    },
    ...mapActions('global/user', [
      'updateProfile',
    ]),
  },
  mounted() {
    const user = this.$store.getters['global/user/getUser'];
    const change = pick(user, ['firstName', 'lastName', 'phoneNumber', 'whatsappNumber']);
    Object.assign(this.model, change);
  },
};
</script>

<style lang="scss" scoped>
  .onboarding-name {
    height: 100%;
    display: flex;
    flex-direction: column;

    .form {
      height: 100%;
      display: flex;
      flex-direction: column;

      .fieldsWrapper {
        width: 340px;
      }

      .helper {
        flex-grow: 2;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;
      }
    }

    .line {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
