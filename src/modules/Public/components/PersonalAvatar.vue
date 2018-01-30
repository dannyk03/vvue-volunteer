<template>
  <div class="personal-avatar-form mt-3">

    <div class="mt-4">
      <vv-webcam-picker class="avatar-wrapper" @pick="showAvatarFromWebcam" v-if="takeFromWebcam" />

      <div class="avatar-wrapper" v-else>
        <div class="avatar">
          <img v-if="avatarPreview" :src="avatarPreview" />
          <div v-else>
            <vv-icon name="avatar" width="42" height="58" :fill="false" backgroundColor="#c1c1c1"  />
            <div class="text mt-3" v-t="'onboarding.personalAvatar.avatarPlaceholder'" />
          </div>
        </div>

        <div class="actions mt-4 mb-4">
          <vv-file-picker @pick="showAvatar">
            <vv-base-button
              class="mr-3"
              color="accent"
              outline
            >
              {{ $t('onboarding.personalAvatar.upload') }}
            </vv-base-button>
          </vv-file-picker>

          <vv-base-button
            @click.native="takeFromWebcam = true"
            color="accent"
            outline
          >
          {{ $t('onboarding.personalAvatar.takeFromWebcam') }}
          </vv-base-button>
        </div>

      </div>
    </div>

    <div class="helper" />

    <div class="bottom">
      <vv-back-button />
      <vv-next-button :disabled="!avatar" v-if="!takeFromWebcam" @click.native="submitStep" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvBaseButton from '@/shared/components/BaseButton';
import VvBackButton from '@/shared/components/BackButton';
import VvIcon from '@/shared/components/BaseIcon';
import VvFilePicker from '@/shared/components/FilePicker';
import VvWebcamPicker from '@/shared/components/WebcamPicker';
import VvNextButton from './NextButton';

import '@/../static/icons/compiled-svg/avatar';

const toFile = url => fetch(url)
  .then(res => res.blob())
  .then(blob => new File([blob], 'File name'));

export default {
  name: 'PersonalAvatar',
  components: {
    VvBaseTextInput,
    VvBaseButton,
    VvBackButton,
    VvIcon,
    VvFilePicker,
    VvWebcamPicker,
    VvNextButton,
  },
  data: () => ({
    avatar: null,
    avatarPreview: null,
    takeFromWebcam: false,
  }),
  methods: {
    submitStep() {
      try {
        this.updateAvatar(this.avatar);
      } catch (e) {
        this.notifyError('Error');
      }
      this.$router.push({ name: 'onboardFinal' });
    },
    showAvatar(file) {
      this.avatar = file;
      this.avatarPreview = window.URL.createObjectURL(file);
    },
    async showAvatarFromWebcam(base64) {
      this.takeFromWebcam = false;
      this.avatarPreview = base64;
      this.avatar = await toFile(base64);
    },
    ...mapActions('global/user', [
      'updateAvatar',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .personal-avatar-form {
    height: 100%;
    display: flex;
    flex-direction: column;

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
