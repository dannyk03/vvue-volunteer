<template>
  <div class="personal-info-form">
    <div>
      <span class="fieldTitle">date of birth</span>
      <div class="line">
        <vv-month-select class="mr-2" v-model="model.birthday.month"/>
        <vv-base-text-input class="mr-2" label="Day" mask="##" v-model="model.birthday.day" />
        <vv-base-text-input label="Year" mask="####" v-model="model.birthday.year" />
      </div>

      <vv-multi-select
        label="Languages"
        :items="languagesList"
        v-model="model.languages"
      />
    </div>

    <div class="mt-4 gender">
      <span class="fieldTitle">gender</span>

      <v-radio-group v-model="model.gender" row>
        <v-radio label="Male" value="radio-1" color="primary"></v-radio>
        <v-radio label="Female" value="radio-2" color="primary"></v-radio>
      </v-radio-group>
    </div>

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
import VvMultiSelect from '@/shared/components/select/MultiSelect';
import VvMonthSelect from '@/shared/components/select/MonthSelect';
import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'PersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvMultiSelect,
    VvMonthSelect,
  },
  data: () => ({
    model: {
      birthday: {
        month: '',
        day: '',
        year: '',
      },
      gender: '',
      languages: [],
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
      this.$router.push('2');
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

  .personal-info-form {
    display: grid;

    width: 340px;
    .line {
      display: flex;
      justify-content: space-between;
    }

    .btn {
      width: 150px;
    }

    .fieldTitle {
      @include calloutFont;
    }

    .gender {
      width: 200px;
    }
  }

</style>
