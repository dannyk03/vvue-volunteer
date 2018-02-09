<template>
  <div class="vv-mentoring-match mt-3">
    <vv-avatar :src="match.avatar" size="110" />
    <h1 class="display-1 heading accented mt-3">{{match.firstName}}</h1>
    <span class="status mt-1">Mentee</span>
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'MentoringMatch',
    components: {
      VvAvatar,
    },
    props: {
      match: Object,
    },
    data: () => ({

    }),
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/fonts';

  .vv-mentoring-match {
    display: flex;
    flex-direction: column;
    align-items: center;

    .status {
      @include calloutSubheaderFont;
    }
  }
</style>
