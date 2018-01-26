<template>
  <v-form class="personal-info-form" v-model="valid" ref="form" @submit.prevent="submitStep">
    <div class="fieldsWrapper">
      <span class="fieldTitle">date of birth</span>
      <div class="line">
        <vv-month-select class="mr-2" v-model="birthday.month" :validation="rules.required" />
        <vv-base-text-input class="mr-2" label="Day" mask="##" v-model="birthday.day" :validation="rules.required" />
        <vv-base-text-input label="Year" mask="####" v-model="birthday.year" :validation="rules.required" />
      </div>

      <vv-multi-select
        label="Languages"
        :items="languagesList"
        v-model="profileFields.languages"
        autocomplete
      />

      <div class="mt-4 gender">
        <span class="fieldTitle">gender</span>

        <v-radio-group v-model="gender" row>
          <v-radio label="Male" value="male" color="primary"></v-radio>
          <v-radio label="Female" value="female" color="primary"></v-radio>
        </v-radio-group>
      </div>
    </div>

    <div class="helper" />

    <div class="bottom">
      <vv-back-button />
      <vv-base-button
        class="mt-3"
        @click.native="submitStep"
        color="accent"
        type="submit"
        >
          Next >
        </vv-base-button>
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
import languagesList from '@/shared/data/langs';

export default {
  name: 'PersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvMultiSelect,
    VvMonthSelect,
  },
  data: () => ({
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
      required: [v => !!v || 'Required'],
    },
  }),
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
