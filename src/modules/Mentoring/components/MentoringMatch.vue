<template>
  <div class="vv-mentoring-match mt-3">
    <vv-avatar :src="match.avatar" size="110" />
    <h1 class="display-1 heading accented mt-3">{{match.firstName}}</h1>
    <span class="status mt-1">Mentee</span>

    <vv-linked-list class="steps" :list="steps">
      <div class="icon" slot="icon" slot-scope="{ item: { icon } }">
        <vv-icon :name="icon" width="12" height="12"  backgroundColor="white" />
      </div>

      <div class="text ml-3" slot="body" slot-scope="{ item }">{{item.text}}</div>
    </vv-linked-list>
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';
  import VvIcon from '@/shared/components/BaseIcon';
  import VvLinkedList from '@/shared/components/LinkedList';
  import '@/../static/icons/compiled-svg/airplane';

  export default {
    name: 'MentoringMatch',
    components: {
      VvAvatar,
      VvLinkedList,
      VvIcon,
    },
    props: {
      match: Object,
    },
    data: () => ({
      steps: [
        {
          icon: 'airplane',
          text: 'Schedule and appointment in schedule tab',
        },
        {
          icon: 'airplane',
          text: 'Check system before session to make sure everything works',
        },
        {
          icon: 'airplane',
          text: 'Read or download preparation materials in preparation tab',
        },
      ],
    }),
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/fonts';
  @import '~@/styles/colors';

  .vv-mentoring-match {
    display: flex;
    flex-direction: column;
    align-items: center;

    .status {
      @include calloutSubheaderFont;
    }

    .steps {
      width: 70%;
      padding-top: 60px;
      .icon {
        width: 30px;
        height: 30px;
        background-color: $secondary;
        border-radius: 100%;
      }

      .text {
        @include boldBodyFont;
      }
    }
  }
</style>
