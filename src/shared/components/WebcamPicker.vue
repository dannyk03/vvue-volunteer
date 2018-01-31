<template>
  <div class="webcam-picker">
    <div class="cam-wrapper mb-4">
      <vue-webcam class="video" ref='webcam'></vue-webcam>
    </div>

    <vv-base-button
      @click.native="takePhoto"
        color="accent"
        outline
    >
      Take photo
    </vv-base-button>
  </div>
</template>

<script>
import VueWebcam from 'vue-webcam';
import VvBaseButton from '@/shared/components/BaseButton';

export default {
  name: 'WebcamPicker',
  components: {
    VueWebcam,
    VvBaseButton,
  },
  data: () => ({
    photo: '',
  }),
  methods: {
    takePhoto() {
      this.$emit('pick', this.$refs.webcam.getPhoto());
    },
  },
};
</script>

<style lang="scss" scoped>
  .webcam-picker {
    .cam-wrapper {
      mask-image: radial-gradient(circle, #fff 100%, #000 100%);
      width: 190px;
      height: 190px;
      border-radius: 50%;

      .video {
        position: relative;
        top: -55px;
        left: -105px;
        transform: scale(0.64);
      }
    }
  }
</style>
