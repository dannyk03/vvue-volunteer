<template>
  <vv-simple-card class="vv-activity-stream">
    <div slot="header" class="header">
      <span v-t="'dashboard.activityStream.title'" />
    </div>
    <div slot="content" class="content mt-4">
      <ul>
        <li class="activity" v-for="activity in activities">
          <div class="activity-avatar">
            <vv-avatar :src="activity.user.avatar" size="32" />
          </div>
          <div class="main ml-3">
            <div class="activity-text">{{ activity.activity }}</div>
            <div class="subtext">
              <span>{{ activity.user.firstName }} {{ activity.user.lastName }} •</span>
              <span>{{ activity.user.country }}</span>
            </div>
          </div>
          <div class="date">{{ activity.date }}</div>
        </li>
      </ul>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'ActivityStream',
    components: {
      VvSimpleCard,
      VvAvatar,
    },
    props: {
      activities: Array,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-activity-stream {
    .header {
      @include calloutFont;
    }

    .content {
      ul {
        width: 100%;
        list-style: none;
        .activity {
          display: flex;
          align-items: center;
          margin-bottom: 40px;

          &:not(:last-child) {
            .activity-avatar {
              position: relative;
              &::after {
                content: '';
                position: absolute;
                height: 30px;
                width: 1px;
                background-color: #E0E0E0;
                bottom: -90%;
                left: 50%;
              }
            }
          }

          .main {
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
      }
    }
  }
</style>
