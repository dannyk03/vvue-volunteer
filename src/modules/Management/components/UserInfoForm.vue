<template>
  <div class="user-info">
    <section class="mt2">
      <img src="" alt="No avatar" />
    </section>
    <!-- TODO: move to own components -->

    <v-form v-model="valid" ref="form" lazy-validation>
      <vv-base-text-input
        required
        :label="$t('user.fields.email')"
        v-model="model.email"
      />
      <!-- <div><span v-t="'user.fields.gender'" />: {{ user.gender }}</div>
      <div><span v-t="'user.fields.birthday'" />: {{ user.birthday }}</div> -->
      <vv-base-date-picker
        :label="$t('user.fields.birthday')"
        v-model="model.birthday"
      />

      <vv-base-select
        :label="$t('user.fields.gender')"
        :items="genders"
        v-model="model.gender"
      />

      <vv-base-text-input
        :label="$t('user.fields.city')"
        v-model="model.city"
      />
      <vv-base-text-input
        :label="$t('user.fields.postcode')"
        v-model="model.postcode"
      />
      <vv-base-text-input
        :label="$t('user.fields.country')"
        v-model="model.country"
      />
      <vv-base-text-input
        :label="$t('user.fields.timezone')"
        v-model="model.timezone"
      />
      <vv-base-text-input
        :label="$t('user.fields.language')"
        v-model="model.language"
      />

      <vv-base-checkbox
        label="Accept SMS"
        v-model="model.acceptSms"
      />

      <v-btn
        class="submit-btn"
        @click="submit"
        :disabled="!valid"
        color="info"
      >
        Save
      </v-btn>

      <v-btn
        class="cancel-btn"
        @click="$emit('cancel')"
      >
        Cancel
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseSelect from '@/shared/components/select/BaseSelect';
import VvBaseCheckbox from '@/shared/components/BaseCheckbox';
import VvBaseDatePicker from '@/shared/components/BaseDatePicker';

export default {
  name: 'UserInfoForm',
  props: {
    user: Object,
  },
  components: {
    VvBaseTextInput,
    VvBaseSelect,
    VvBaseCheckbox,
    VvBaseDatePicker,
  },
  data: () => ({
    model: null,
    valid: true,
    // temp
    genders: [
      { text: 'Male', value: 'Male' },
      { text: 'Female', value: 'Female' },
    ],
  }),
  methods: {
    ...mapActions('global/auth', [
      'login',
    ]),
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit('save', this.model);
      }
    },
  },
  created() {
    this.model = { ...this.user };
  },
};
</script>

<style lang="scss" scoped>
  .user-info {
    width: 400px;
    display: flex;
    flex-direction: column;

    section {
      align-self: center;
      text-align: center;
      border: 1px solid grey;
      width: 150px;
      height: 150px;
    }
  }
</style>
