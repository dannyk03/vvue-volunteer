<template>
  <v-form class="personal-job-form" v-model="valid" ref="form" @submit.prevent="submitStep">

    <vv-base-text-input class="mr-2" label="Current Job or desired job" v-model="model.currentJob" />
    <vv-base-text-input label="Position" v-model="model.position" />
    <vv-base-text-input label="Education background" v-model="model.education" />

    <vv-base-button
      class="mt-3"
      color="accent"
      type="submit"
      >
        Next >
      </vv-base-button>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';

export default {
  name: 'PersonalJob',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    valid: true,
    model: {
      currentJob: '',
      position: '',
      education: '',
    },
  }),
  methods: {
    async submitStep() {
      if (this.$refs.form.validate()) {
        await this.updateProfileFields(this.model);

        this.$router.push('4');
      }
    },
    ...mapActions('global/user', [
      'updateProfileFields',
    ]),
  },
  mounted() {
    const data = this.$store.getters['global/user/getProfile'];

    debugger;
    Object.assign(this.model, data);
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .personal-job-form {
    display: grid;

    width: 340px;

    .btn {
      width: 150px;
    }
  }

</style>
