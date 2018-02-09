<template>
  <vv-simple-card class="vv-ranking">
    <div slot="header" class="header">
      <span v-t="'dashboard.ranking.title'" />
      <div>** stars **</div>
    </div>
    <div slot="content" class="content mt-4">
      <ul>
        <li class="stat" v-for="(value, stat) in rankingStats.activities">
          <span v-t="`dashboard.rankins.stats.${stat}`" />
          <span>{{ value }}</span>
        </li>
      </ul>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'Ranking',
    components: {
      VvSimpleCard,
    },
    props: {
      rankingStats: {
        rating: Number,
        level: String,
        activities: {
          participations: Number,
          mentoringSessions: Number,
          invitedColleagues: Number,
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-ranking {
    .header {
      display: flex;
      justify-content: space-between;

      @include calloutFont;
    }

    .content {
      ul {
        width: 100%;
        list-style: none;

        .stat {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;

          @include boldBodyFont;
        }
      }
    }
  }
</style>
