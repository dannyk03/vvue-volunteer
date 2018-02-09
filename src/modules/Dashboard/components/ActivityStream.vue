<template>
  <vv-simple-card class="vv-activity-stream">
    <div slot="header" class="header">
      <span v-t="'dashboard.activityStream.title'" />
    </div>
    <div slot="content" class="content mt-4">
      <vv-linked-list :list="activities">
        <vv-avatar slot="icon" slot-scope="{ item }" :src="item.user.avatar" size="30" />

        <div class="main ml-3" slot="body" slot-scope="{ item: { activity, date, user }}">
          <div>
            <div class="activity-text">{{ activity }}</div>
            <div class="subtext">
              <span>{{ user.firstName }} {{ user.lastName }} •</span>
              <span>{{ user.country }}</span>
            </div>
          </div>

          <div class="date">{{ date }}</div>
        </div>

      </vv-linked-list>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatar from '@/shared/components/Avatar';
  import VvLinkedList from '@/shared/components/LinkedList';

  export default {
    name: 'ActivityStream',
    components: {
      VvSimpleCard,
      VvAvatar,
      VvLinkedList,
    },
    props: {
      activities: Array,
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-activity-stream {
    .header {
      @include calloutFont;
    }

    .main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 2;
      line-height: 17px;

      .activity-text {
        @include boldBodyFont;
      }

      .subtext {
        @include captionFont;
      }
    }

    .date {
      @include captionLight;
    }
  }
</style>
