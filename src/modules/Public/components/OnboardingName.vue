<template>
  <div class="onboarding-name">
    <h1 class="display-1 mb-4">Let’s know each and be friends. <span class="accented">Introduce yourself</span></h1>

    <div class="form">
      <div class="line">
        <vv-base-text-input label="First name" class="mr-2" v-model="model.firstName" />
        <vv-base-text-input label="Last name" v-model="model.lastName" />
      </div>

      <vv-base-text-input
        label="Your phone number"
        mask="phone"
        class="mr-2"
        placeholder="First Name"
        v-model="model.phone"
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
        v-model="model.whatsAppNumber"
      />

      <vv-base-button
        color="accent"
        class="mt-3"
        :disabled="!model.firstName || !model.lastName || !model.phone"
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
import VvBaseSelect from '@/shared/components/select/BaseSelect';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'OnboardingName',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBaseSelect,
  },
  data: () => ({
    model: {
      firstName: '',
      lastName: '',
      phone: '',
      whatsAppNumber: '',
    },
    isNumberWhatsApp: '',
    whatsAppOptions: [
      { value: 'Y', text: 'Yes, it’s my Whatsapp number' },
      { value: 'A', text: 'No, I enter another' },
      { value: 'N', text: 'No, I don’t have Whatsapp' },
    ],
  }),
  methods: {
    submitStep() {
      this.setNameInfo(this.model);
      this.$router.push('4');
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    const data = this.$store.getters['public/getNameInfo'];
    Object.assign(this.model, data);
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
