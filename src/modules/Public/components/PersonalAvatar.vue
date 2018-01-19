<template>
  <div class="personal-avatar-form">

    <div class="mt-4">
      <vv-webcam-picker class="avatar-wrapper" @pick="showAvatarFromWebcam" v-if="takeFromWebcam" />

      <div class="avatar-wrapper" v-else>
        <div class="avatar">
          <img v-if="avatarPreview" :src="avatarPreview" />
          <div v-else>
            <vv-icon name="avatar" width="42" height="58" :fill="false" backgroundColor="#c1c1c1"  />
            <div class="text mt-3">Awesome avatar here</div>
          </div>
        </div>

        <div class="actions mt-4 mb-4">
          <vv-file-picker @pick="showAvatar">
            <vv-base-button
              class="mr-3"
              color="accent"
              outline
            >
              Upload
            </vv-base-button>
          </vv-file-picker>

          <vv-base-button
            @click.native="takeFromWebcam = true"
            color="accent"
            outline
          >
            Take from webcam
          </vv-base-button>
        </div>

      </div>
    </div>

    <vv-base-button
      v-if="!takeFromWebcam"
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
import VvFilePicker from '@/shared/components/FilePicker';
import VvWebcamPicker from '@/shared/components/WebcamPicker';
import '@/../static/icons/compiled-svg/avatar';

import { UPDATE_ONBOARDING_INFO } from '../mutationTypes';

export default {
  name: 'PersonalAvatar',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvIcon,
    VvFilePicker,
    VvWebcamPicker,
  },
  data: () => ({
    model: {
      currentJob: '',
      position: '',
      education: '',
    },
    avatarPreview: null,
    takeFromWebcam: false,
  }),
  methods: {
    submitStep() {
      this.setNameInfo({
        birthday: this.birthday,
        gender: this.gender,
        location: this.location,
      });
      this.$router.push({ name: 'onboardFinal' });
    },
    ...mapMutations('public', {
      setNameInfo: UPDATE_ONBOARDING_INFO,
    }),
    showAvatar(file) {
      this.avatarPreview = window.URL.createObjectURL(file);
    },
    showAvatarFromWebcam(base64) {
      this.takeFromWebcam = false;
      this.avatarPreview = base64;
    },
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

      .actions {
        display: flex;
      }

      .avatar {
        width: 190px;
        height: 190px;
        border: 1px dashed $secondaryGrey;
        flex-direction: column;

        img {
          object-fit: cover;
        }

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
