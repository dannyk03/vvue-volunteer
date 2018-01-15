<template>
  <div class="personal-avatar-form">

    <div class="avatar-wrapper">
      <div class="avatar mt-4">
         <vv-icon name="avatar" width="42" height="58" :fill="false" backgroundColor="#c1c1c1"  />
         <div class="text mt-3">Awesome avatar here</div>
      </div>

      <div class="actions mt-4 mb-4">
        <vv-base-button
          class="mr-3"
          @click.native="submitStep"
          color="accent"
          outline
          >
            Upload
          </vv-base-button>

          <vv-base-button
            @click.native="submitStep"
            color="accent"
            outline
            >
              Take from webcam
            </vv-base-button>
      </div>
    </div>


    <vv-base-button
      class="mt-5"
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
import VvIcon from '@/shared/components/BaseIcon';
import '@/../static/icons/compiled-svg/avatar';

import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'PersonalAvatar',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvIcon,
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

  .personal-avatar-form {
    display: grid;

    .avatar-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {
        width: 190px;
        height: 190px;
        border: 1px dashed $secondaryGrey;
        flex-direction: column;

        .text {
          width: 120px;
          @include placeholderFont;
        }
      }

      button {
        width: 160px;
      }

    }

    .btn {
      width: 150px;
    }
  }

</style>
