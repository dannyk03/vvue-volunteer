<template>
  <v-form class="personal-info-form" v-model="valid" ref="form" @submit.prevent="submitStep">
    <div class="fieldsWrapper mt-4">
      <span class="fieldTitle" v-t="'onboarding.personalInfo.fields.dob'" />
      <div class="line mt-3">
        <vv-base-text-input
          class="mr-2"
          :label="$t('onboarding.personalInfo.fields.dob.day')"
          mask="##"
          v-model="birthday.day"
          :validation="rules.required"
        />

        <vv-month-select
          class="mr-2"
          v-model="birthday.month"
          :validation="rules.required"
        />

        <vv-base-text-input
          :label="$t('onboarding.personalInfo.fields.dob.year')"
          mask="####"
          v-model="birthday.year"
          :validation="rules.required"
        />
      </div>

      <vv-multi-select
        :label="$t('onboarding.personalInfo.fields.languages')"
        :items="languagesList"
        v-model="profileFields.languages"
        autocomplete
      />

      <div class="mt-4 gender">
        <span class="fieldTitle">{{ $t('onboarding.personalInfo.fields.gender') }}</span>
        <vv-gender-picker class="mt-3" v-model="gender" />
      </div>
    </div>

    <div class="helper" />

    <div class="bottom">
      <vv-back-button />
      <vv-next-button :disabled="!valid" />
    </div>


  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvMultiSelect from '@/shared/components/select/MultiSelect';
import VvMonthSelect from '@/shared/components/select/MonthSelect';
import VvGenderPicker from '@/shared/components/select/GenderPicker';
import VvNextButton from './NextButton';
import languagesList from '@/shared/data/langs';

export default {
  name: 'PersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvMultiSelect,
    VvMonthSelect,
    VvGenderPicker,
    VvNextButton,
  },
  data() {
    return {
      valid: true,
      birthday: {
        month: '',
        day: '',
        year: '',
      },
      gender: '',
      profileFields: {
        languages: [],
      },
      languagesList,
      rules: {
        required: [v => !!v || this.$t('common.labels.required')],
      },
    };
  },
  computed: {
    model() {
      return {
        gender: this.gender,
        birthday: `${this.birthday.year}-${this.birthday.month}-${this.birthday.day}`,
      };
    },
  },
  methods: {
    async submitStep() {
      if (this.$refs.form.validate()) {
        await Promise.all([
          this.updateProfile(this.model),
          this.updateProfileFields(this.profileFields),
        ]);

        this.$router.push('2');
      }
    },
    ...mapActions('global/user', [
      'updateProfile',
      'updateProfileFields',
    ]),
  },
  mounted() {
    const user = this.$store.getters['global/user/getUser'];
    const languages = this.$store.getters['global/user/getLanguages'];
    const [year, month, day] = user.birthday ? user.birthday.split('-') : ['', '', ''];
    const gender = user.gender;

    setTimeout(() => {
      Object.assign(this, {
        gender,
        birthday: {
          year,
          month,
          day,
        },
      });
    }, 1000);

    if (languages) {
      languages.forEach(i => this.profileFields.languages.push(i));
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .personal-info-form {
    height: 100%;
    display: flex;
    flex-direction: column;

    .line {
      display: flex;
      justify-content: space-between;
    }

    .fieldsWrapper {
      width: 360px;

      .fieldTitle {
        @include calloutFont;
      }
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

    .gender {
      width: 200px;
    }
  }
</style>
