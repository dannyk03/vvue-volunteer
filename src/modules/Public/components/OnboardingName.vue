<template>
  <div class="onboarding-name">
    <i18n path="onboarding.name.title" tag="h1" class="display-1 mb-4">
      <span place="accent" class="accented" v-t="'onboarding.name.title.accent'" />
    </i18n>

    <v-form class="form" v-model="valid" ref="form" lazy-validation @submit.prevent="submitStep">
      <div class="fieldsWrapper">
        <div class="line">
          <vv-base-text-input
            :label="$t('common.fields.firstName')"
            class="mr-2"
            v-model="model.firstName"
            :validation="rules.firstName"
          />
          <vv-base-text-input
            :label="$t('common.fields.lastName')"
            v-model="model.lastName"
            :validation="rules.lastName"
          />
        </div>

        <vv-base-text-input
          :label="$t('onboarding.name.fields.phoneNumber')"
          mask="phone"
          class="mr-2"
          v-model="model.phoneNumber"
          :validation="rules.phoneNumber"
        />

        <vv-base-select
          class="mr-2"
          :label="$t('onboarding.name.fields.isWhatsApp')"
          :items="whatsAppOptions"
          v-model="isNumberWhatsApp"
        />

        <vv-base-text-input
          v-if="isNumberWhatsApp === 'A'"
          :label="$t('onboarding.name.fields.whatsappNumber')"
          mask="phone"
          class="mr-2"
          v-model="model.whatsappNumber"
        />
      </div>

      <div class="helper" />

      <div class="bottom">
        <div />
        <vv-next-button :disabled="!valid" />
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
import VvNextButton from './NextButton';

export default {
  name: 'OnboardingName',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvBaseSelect,
    VvNextButton,
  },
  data() {
    return {
      valid: true,
      model: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        whatsappNumber: '',
      },
      isNumberWhatsApp: '',
      whatsAppOptions: [
        { value: 'Y', text: this.$t('onboarding.name.fields.isWhatsApp.options.yes') },
        { value: 'A', text: this.$t('onboarding.name.fields.isWhatsApp.options.no') },
        { value: 'N', text: this.$t('onboarding.name.fields.isWhatsApp.options.dontHave') },
      ],
      rules: {
        firstName: [v => !!v || this.$t('common.fields.validation.firstName.required')],
        lastName: [v => !!v || this.$t('common.fields.validation.lastName.required')],
        phoneNumber: [v => !!v || this.$t('common.fields.validation.phoneNumber.required')],
      },
    };
  },
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
