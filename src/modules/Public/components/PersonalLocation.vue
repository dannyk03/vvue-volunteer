<template>
  <v-form class="personal-location-form" v-model="valid" ref="form" @submit.prevent="submitStep">
    <div class="fieldsWrapper">
      <vv-base-select
        label="Location"
        v-model="model.country"
        :items="countries"
        :validation="rules.country"
        autocomplete
      />

      <vv-base-select
        label="Country of origin"
        v-model="model.countryOfOrigin"
        :items="countries"
        :validation="rules.countryOfOrigin"
        autocomplete
      />
    </div>

    <div class="helper" />

    <div class="bottom">
      <vv-back-button />
      <vv-base-button
        class="mt-3"
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
import pick from 'lodash/pick';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseSelect from '@/shared/components/select/BaseSelect';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import countries from '@/shared/data/countries';

export default {
  name: 'PersonalInfo',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvBaseSelect,
  },
  data: () => ({
    valid: true,
    model: {
      country: '',
      countryOfOrigin: '',
    },
    rules: {
      country: [
        v => !!v || 'Country is required',
      ],
      countryOfOrigin: [
        v => !!v || 'Country of origin is required',
      ],
    },
    countries,
  }),
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
    const change = pick(user, ['country', 'countryOfOrigin']);
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
