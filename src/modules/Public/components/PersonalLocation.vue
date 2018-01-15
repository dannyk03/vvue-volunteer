<template>
  <div class="personal-location-form">
    <vv-base-text-input class="mr-2" label="Location" v-model="model.location" />
    <vv-base-text-input label="Country of origin" v-model="model.countryOfOrigin" />

    <vv-base-button
      class="mt-3"
      @click.native="submitStep"
      color="accent"
      >
        Next >
      </vv-base-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'PersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    model: {
      location: '',
      countryOfOrigin: '',
    },
    languagesList: [
      'English',
      'German',
      'Ukrainian',
      'Arabic',
    ],
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        birthday: this.birthday,
        gender: this.gender,
        location: this.location,
      });
      this.$router.push('3');
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
  },
  mounted() {
    const data = this.$store.getters['public/getPersonalInfo'];
    Object.assign(this, data);
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .personal-location-form {
    display: grid;

    width: 340px;

    .btn {
      width: 150px;
    }
  }

</style>
