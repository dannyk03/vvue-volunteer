<template>
  <v-form class="personal-location-form" v-model="valid" ref="form" @submit.prevent="submitStep">
    <div class="fieldsWrapper">
      <vv-base-text-input
        :label="$t('onboarding.personalLocation.fields.address')"
        v-model="model.address"
      />

      <div class="line">
        <vv-base-text-input
          class="postcode mr-2"
          :label="$t('onboarding.personalLocation.fields.postcode')"
          v-model="model.postcode"
        />

        <vv-base-text-input
          class="city"
          :label="$t('onboarding.personalLocation.fields.city')"
          v-model="model.city"
        />
      </div>

      <vv-base-select
        :label="$t('onboarding.personalLocation.fields.country')"
        v-model="model.country"
        :items="countries"
        :validation="rules.country"
        autocomplete
      />
    </div>

    <div class="helper" />

    <div class="bottom">
      <vv-back-button />
      <vv-next-button class="mt-3" :disabled="!valid" />
    </div>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import pick from 'lodash/pick';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseSelect from '@/shared/components/select/BaseSelect';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvNextButton from './NextButton';

import countries from '@/shared/data/countries';

export default {
  name: 'PersonalInfo',
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
        address: '',
        postcode: '',
        city: '',
        country: '',
      },
      rules: {
        country: [
          v => !!v || this.$t('onboarding.personalLocation.fields.validation.country.required'),
        ],
      },
      countries,
    };
  },
  methods: {
    async submitStep() {
      if (this.$refs.form.validate()) {
        await Promise.all([
          this.updateProfile(this.model),
        ]);

        this.$router.push('3');
      }
    },
    ...mapActions('global/user', [
      'updateProfile',
    ]),
  },
  mounted() {
    const user = this.$store.getters['global/user/getUser'];
    const change = pick(user, ['country', 'address', 'postcode', 'city']);
    Object.assign(this.model, change);
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .personal-location-form {
    height: 100%;
    display: flex;
    flex-direction: column;

    .line {
      display: flex;
      justify-content: space-between;
    }

    .postcode {
      max-width: 100px;
    }

    .city {
      flex-grow: 2;
    }

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

</style>
