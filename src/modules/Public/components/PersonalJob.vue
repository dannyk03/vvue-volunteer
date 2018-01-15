<template>
  <div class="personal-job-form">
    <vv-base-text-input class="mr-2" label="Current Job or desired job" v-model="model.currentJob" />
    <vv-base-text-input label="Position" v-model="model.position" />
    <vv-base-text-input label="Education background" v-model="model.education" />

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
  name: 'PersonalJob',
  components: {
    VvBaseTextInput,
    VvBaseButton,
  },
  data: () => ({
    model: {
      currentJob: '',
      position: '',
      education: '',
    },
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        birthday: this.birthday,
        gender: this.gender,
        location: this.location,
      });
      this.$router.push('4');
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

  .personal-job-form {
    display: grid;

    width: 340px;

    .btn {
      width: 150px;
    }
  }

</style>
