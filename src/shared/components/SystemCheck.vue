<template>
  <vv-simple-card class="vv-system-check">
    <div slot="header" class="header">
      <div class='header-title'>System</div>
    </div>
    <div slot="content" class="content mt-4">
      <v-layout justify-center="true"  class="content-icons">
        <svg class='svg-icon' height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        <svg class='svg-icon' height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        <svg class='svg-icon' height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
      </v-layout>
      <div class="content-text">Check systems before the session starts to make sure the camera, microphone and dynamic works.</div>
      <v-layout justify-center="true">
        <vv-base-button-arrow color='#00b1a7'>
          <span slot="name">Check system</span>
        </vv-base-button-arrow>
      </v-layout>
    </div>
  </vv-simple-card>
</template>
<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvBaseButtonArrow from '@/shared/components/BaseButtonArrow';

  export default {
    name: 'SystemCheck',
    components: {
      VvSimpleCard,
      VvBaseButtonArrow
    },
    data: () => ({

    }),
  };
</script>
<style lang="scss" scoped>
  @import '~@/styles/index';

  .header {
    &-title {
      @include calloutFont;
      margin-bottom: 43px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    &-icons {
      margin-bottom: 17px;
    }

    &-text {
      @include captionFont;
      margin-bottom: 22px;
      text-align: center;
    }
  }
</style>
